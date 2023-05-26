<template>
  <a-tooltip placement="top" :title="title">
    <a-avatar >
      <template #icon v-if="contentType === 'icon'">
        <component :is="icon" />
      </template>
      <span  v-if="contentType === 'text'">{{ text }}</span>
    </a-avatar>
  </a-tooltip>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  contentType: string;
  icon: string;
  text: string;
}>();
</script>
<style scoped></style>
