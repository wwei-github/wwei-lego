<template>
  <div class="form-box">
    <h3>属性编辑</h3>
    <br />

    <div v-for="(item, index) in finalProps" :key="index" style="margin-bottom: 10px;">
      <a-row align="middle">
        <a-col span="6">
          <span>{{ item.name }}</span>
        </a-col>
        <a-col span="18">
          <component :is="item.component" :value="item.value" v-bind="item.extraProps" />
        </a-col>
      </a-row>
    </div>
    {{  }}
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/GlobalStore';
import { mapPropsToForm } from '@/config/mapPropsToForm';
import { reactive } from 'vue';
const store = useGlobalStore();

let finalProps = reactive({} as PropsForm);

store.$subscribe(() => {
  const activeComponent = store.getActiveComponent();
  Object.entries(activeComponent ? activeComponent.props : {}).forEach(([key, val]) => {
    const itemKey = key as keyof TextComponentProps;
    let item = mapPropsToForm[itemKey];
    if (item) {
      item.value = val;
        finalProps[itemKey] = item;
      console.log(finalProps[itemKey])
    }
  });
});
</script>
<style scoped>
.form-box {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
}
</style>
