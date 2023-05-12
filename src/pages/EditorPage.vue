<template>
  <a-layout style="height: 300px">
    <a-layout-sider width="300" style="background-color: red">Sider</a-layout-sider>
    <a-layout-content>Content</a-layout-content>
    <a-layout-sider width="300" style="background-color: red">Sider</a-layout-sider>
  </a-layout>
</template>

<script setup>
import useGlobalStore from '../stores/GlobalStore.ts';
const globalStore = useGlobalStore();
const { components, currentElement } = globalStore;
</script>

<style></style>
