import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import routes from './routes/index';
import './styles/reset.css';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);

const pinia = createPinia();

app.use(router).use(Antd).use(pinia);

app.mount('#app');
