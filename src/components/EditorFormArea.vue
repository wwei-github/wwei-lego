<template>
  <div class="form-box">
    <h3>属性编辑</h3>
    <br />

    <div v-for="(item, index) in finalProps" :key="index" style="margin-bottom: 10px">
      <a-row align="middle">
        <a-col span="6">
          <span>{{ item.name }}</span>
        </a-col>
        <a-col span="18">
          <component
            :is="item.component"
            :[item.valueProps]="item.value"
            v-bind="item.extraProps"
            v-on="item.events"
          >
            <template v-if="item.options && item.subComponent">
              <component
                :is="item.subComponent"
                v-for="(option, k) in item.options"
                :key="k"
                :[item.subValueProps!]="option.value"
              >
                <RenderVnode :vNode="option.name "/>
              </component>
            </template>
          </component>
        </a-col>
      </a-row>
    </div>
    {{}}
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/GlobalStore';
import { mapPropsToForm } from '@/config/mapPropsToForm';
import { propsFormItem } from '@/types/mapPropsToForm';
import RenderVnode from './RenderVnode'
import { reactive } from 'vue';

interface FormProps extends propsFormItem {
  subValueProps: string;
  value: any;
  valueProps: string;
  eventName: string;
  events: { [k in string]: (e: any) => void };
}

type PropsForm = {
  [k in keyof TextComponentProps]: FormProps;
};

const store = useGlobalStore();

let finalProps = reactive({} as PropsForm);

store.$subscribe(() => {
  const activeComponent = store.getActiveComponent();
  Object.entries(activeComponent ? activeComponent.props : {}).forEach(([key, value]) => {
    const itemKey = key as keyof TextComponentProps;
    let item = mapPropsToForm[itemKey];
    if (item) {
      const {
        initTransformValue,
        afterTransformValue,
        valueProps = 'value',
        subValueProps = 'value',
        eventName = 'change',
      } = item;
      const newItem: FormProps = {
        ...item,
        value: initTransformValue ? initTransformValue(value) : value,
        valueProps,
        subValueProps,
        eventName,
        events: {
          [eventName]: e =>
            changeFormProps(itemKey, afterTransformValue ? afterTransformValue(e) : e),
        },
      };
      finalProps[itemKey] = newItem;
    }
  });
});

function changeFormProps(key: string, e: any) {
  store.changeActiveComponentData(key, e);
}
</script>
<style scoped>
.form-box {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
}
</style>
