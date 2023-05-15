<template>
  <a-layout class="editor-page">
    <a-layout-sider width="300" style="background-color: white">
      <EditorComponentsList/>
    </a-layout-sider>
    <a-layout-content class="content-box">
      <EditorCanvasCard />
    </a-layout-content>
    <a-layout-sider width="300" style="background-color: white"><EditorFormArea /></a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">
import EditorComponentsList from '@/components/EditorComponentsList.vue';
import EditorCanvasCard from '@/components/EditorCanvasCard.vue';
import EditorFormArea from '@/components/EditorFormArea.vue';

</script>

<style>
.editor-page {
  height: 100vh;
}
.content-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
