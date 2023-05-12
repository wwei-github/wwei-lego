<template>
  <a-card hoverable style="width: 100%" class="template-card" @click="toDetail">
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function toDetail() {
  router.push({ path: '/template/1' });
}
</script>

<style>
.template-card {
  border-radius: 5px !important;
  overflow: hidden;
}
</style>
