import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash-es';

export interface GlobalStore {
  components: ComponentData[]; // 在画布中渲染的组件数据
  currentElement: string | undefined; // 当前正在操作的dom
}
export interface ComponentData {
  id: string;
  name: string;
  props: { [key: string]: any };
}

export const useGlobalStore = defineStore('globalStore', () => {
  const global = reactive<GlobalStore>({
    components: [],
    currentElement: undefined,
  });

  function addGlobalComponent(component: TextComponentProps) {
    global.components.push({ id: uuidv4(), name: 'WText', props: component });
  }

  function deleteComponent(id: string) {
    global.components = global.components.filter(i => i.id !== id);
  }

  function setActiveComponent(id: string) {
    global.currentElement = id;
  }

  function getActiveComponent(): ComponentData | undefined {
    return global.components.find(i => i.id === global.currentElement);
  }

  function changeActiveComponentData(type: string, data: any): void {
    if (!global.currentElement) return;
    const index = global.components.findIndex(i => i.id === global.currentElement);
    const component = cloneDeep(global.components[index]);
    component.props[type] = data;
    global.components.splice(index, 1, component);
  }

  return {
    global,
    addGlobalComponent,
    deleteComponent,
    setActiveComponent,
    getActiveComponent,
    changeActiveComponentData,
  };
});
