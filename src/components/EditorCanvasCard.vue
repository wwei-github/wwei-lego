<template>
  <a-card class="canvas-card" :bodyStyle="{ padding: 0 }">
    <EditorWrapper
      v-for="component in components"
      :key="component.id"
      :class="{ active: component.id === currentElement }"
      @click="setActiveComponent(component.id)"
    >
      <component :is="componentMap[component.name]" v-bind="component.props" />
      <close-circle-outlined class="delete-icon" @click="deleteComponent(component.id)" />
    </EditorWrapper>
  </a-card>
</template>

<script setup lang="ts">
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { computed } from 'vue';
import WText from '@/components/WText.vue';
import EditorWrapper from '@/components/EditorWrapper.vue';
import { useGlobalStore } from '../stores/GlobalStore';
const store = useGlobalStore();
const components = computed(() => store.global.components);
const currentElement = computed(() => store.global.currentElement);
type componentMapType = {
  [k in string]: typeof WText;
};

const componentMap: componentMapType = { WText: WText };

function deleteComponent(id: string) {
  store.deleteComponent(id);
}

function setActiveComponent(id: string) {
  store.setActiveComponent(id);
}
</script>

<style scoped>
.canvas-card {
  width: 375px;
  height: 500px;
}
.ant-card-body > * {
  position: relative !important;
}
.delete-icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
