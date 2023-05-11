<template>
  detal{{ id }}
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = computed(()=>route.params.id)
</script>

<style>

</style>