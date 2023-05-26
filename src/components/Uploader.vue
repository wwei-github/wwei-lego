<template>
  <div drag>
    <div :class="dragHover?'drag-hover':''" @click="triggerClick" :disabled="isLoading" v-on="dragEvents">
      <slot name="loading" v-if="isLoading">
        <button>正在上传</button>
      </slot>
      <slot name="loaded" v-else-if="!isLoading && uploadFileList.length > 0">
        <button>选择文件</button>
      </slot>
      <slot name="default" v-else>
        <button>选择文件</button>
      </slot>
    </div>
    <input
      ref="fileInputRef"
      type="file"
      :style="{ display: 'none' }"
      @change="handleInputChange"
    />
    <ul>
      <li :class="`file-li file-${file.status}`" v-for="file in uploadFileList" :key="file.id">
        {{ file.name }}
        <a-progress :percent="file.progress" />
        <loading-outlined v-if="file.status === 'loading'" />
        <close-circle-outlined v-else @click="deleteFile(file.id)" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios, { AxiosHeaders } from 'axios';
import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { LoadingOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
type UploadStatus = 'ready' | 'loading' | 'success' | 'failed';
interface FileInfo {
  id: string;
  name: string;
  size: number;
  file: File;
  status: UploadStatus;
  progress?: number;
}

const props = withDefaults(
  defineProps<{
    action: string;
    headers?: Object;
    name?: string;
    beforeUpload?: (...args: File[]) => boolean | Promise<File>;
    onSuccess?: (data: any, file: File, fileList: FileInfo[]) => void;
    onError?: (error: Error, file: File, fileList: FileInfo[]) => void;
  }>(),
  {}
);

const fileInputRef = ref<HTMLInputElement | null>(null);
let uploadFileList = ref<FileInfo[]>([]);
const isLoading = computed(() => uploadFileList.value.some(i => i.status === 'loading'));

const dragEvents = reactive({
  dragover: (e: DragEvent) => dragoverEvent(e, true),
  dragleave: (e: DragEvent) => dragleaveEvent(e, false),
  drop: dropEvent,
});
const dragHover = ref(false);

function triggerClick() {
  fileInputRef.value?.click();
}

function uploadFileFn(upLoadFile: File) {
  if (!upLoadFile) return;
  const formData = new FormData();

  formData.append(upLoadFile.name, upLoadFile);

  const fileInfo = reactive<FileInfo>({
    id: uuidv4(),
    name: `${props.name || ''}upLoadFile.name`,
    size: upLoadFile.size,
    status: 'loading',
    file: upLoadFile,
  });
  uploadFileList.value.push(fileInfo);
  const headersInfo = Object.assign(
    {
      'Content-Type': 'multipart/form-data',
    },
    props.headers || {}
  ) as unknown as AxiosHeaders;
  axios
    .post(props.action, formData, {
      headers: headersInfo,
      onUploadProgress: function (progressEvent) {
        // 处理原生进度事件
        if (progressEvent.total) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          fileInfo.progress = progress;
        }
      },
    })
    .then(_res => {
      fileInfo.status = 'success';
      if (props.onSuccess) {
        props.onSuccess(_res, upLoadFile, uploadFileList.value);
      }
    })
    .catch(_err => {
      fileInfo.status = 'failed';
      if (props.onError) {
        props.onError(_err, upLoadFile, uploadFileList.value);
      }
    })
    .finally(() => {
      if (fileInputRef.value) {
        fileInputRef.value.value = '';
      }
    });
}

function handleInputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const files = target.files || [];
  const upLoadFile = files[0];
  if (props.beforeUpload) {
    const result = props.beforeUpload(upLoadFile);
    if (result && result instanceof Promise) {
      result.then(processedFile => {
        if (processedFile instanceof File) {
          uploadFileFn(processedFile);
        } else {
          throw new Error('beforeUpload返回信息错误');
        }
      });
    } else if (result === true) {
      uploadFileFn(upLoadFile);
    }
  } else {
    uploadFileFn(upLoadFile);
  }
}

function deleteFile(id: string) {
  uploadFileList.value = uploadFileList.value.filter(f => f.id !== id);
}

function dragoverEvent(e: DragEvent, hover: boolean) {
  e.preventDefault();
  dragHover.value = hover;
}
function dragleaveEvent(e: DragEvent, hover: boolean) {
  e.preventDefault();
  dragHover.value = hover;
}
function dropEvent(e: DragEvent) {
  dragHover.value = false;
  e.preventDefault();
  if (e.dataTransfer) {
    uploadFileFn(e.dataTransfer.files[0]);
  }
}
</script>
<style scoped>
.file-li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.file-loading {
  color: coral;
}
.file-success {
  color: aqua;
}
.file-failed {
  color: brown;
}
.drag-hover{
    background-color: brown
}
</style>
