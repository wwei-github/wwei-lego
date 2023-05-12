import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface GlobalStore {
  components: ComponentData[]; // 在画布中渲染的组件数据
  currentElement: string | null; // 当前正在操作的dom
}
interface ComponentData {
  id: string;
  name: string;
  props: { [key: string]: any };
}

const useGlobalStore = defineStore('globalStore', () => {
  const global = reactive<GlobalStore>({
    components: [],
    currentElement: null,
  });
  return { global };
});

export default {
  useGlobalStore,
};
