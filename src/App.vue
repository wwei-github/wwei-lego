<template>
  <a-layout>
    <Uploader name="aaa" :beforeUpload="beforeUpload" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"/>
    <a-layout-header v-if="currentWithHeader">
      <a-row>
        <a-col :span="12">
          <router-link to="/">
            <div class="header">
              <img src="./assets/logo-simple.png" alt="" />
              <h1 class="header-text">慕课乐高</h1>
            </div>
          </router-link>
        </a-col>
        <a-col :span="12" style="text-align: right">
          <router-link to="/login">
            <a-button type="primary" shape="round">登录</a-button>
          </router-link>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="background-color: #fff">
      <router-view />
    </a-layout-content>
    <a-layout-footer v-if="currentWithFooter">Footer</a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import Uploader from "@/components/Uploader.vue"
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const currentWithHeader = computed(() => route?.meta.withHeader);
const currentWithFooter = computed(() => route?.meta.withFooter);


function beforeUpload(file:File) {
  return Promise.resolve(file);
}

</script>

<style>
.header {
  display: flex;
  align-items: center;
}
.header img {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: block;
  margin-right: 10px;
}
.header-text {
  color: white;
  font-size: 22px;
}
</style>
