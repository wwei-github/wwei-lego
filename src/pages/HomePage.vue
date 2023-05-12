<template>
  <div class="template-list">
    <a-row :gutter="16">
      <a-col v-for="(item, index) in templates" v-bind:key="index" class="gutter-row" :span="6">
        <TemplateCard :template="item" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import TemplateCard from '@/components/TemplateCard.vue';
const templates = reactive([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
</script>

<style>
.template-list {
  width: 80%;
  min-width: 900px;
  margin: 20px auto;
}
.gutter-row {
  margin-bottom: 16px;
}
</style>
