<template>
  <div class="components-box">
    <div
      class="components-item"
      v-for="(template, index) in defaultTextTemplatesComponents"
      :key="index"
      @click="addNewComponent(template as TextComponentProps)"
    >
      <WText v-bind="template" />
    </div>
  </div>
</template>

<script setup lang="ts">
import defaultTextTemplatesComponents from '@/config/defaultTemplate';
import WText from '@/components/WText.vue';
import { useGlobalStore } from '../stores/GlobalStore';

const store = useGlobalStore();

function addNewComponent(component: TextComponentProps) {
  store.addGlobalComponent(component);
}
</script>

<style lang="less">
.components-box {
  width: 100%;
  padding: 10px 15px;
}
.components-item {
  cursor: pointer;
}
.components-item > * {
  cursor: pointer;
  position: static !important;
}
</style>
