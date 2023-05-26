import { PropsForm } from '@/types/mapPropsToForm';
import { VNode } from 'vue';

const fontFamilyArr = [
  { name: '黑体', value: 'SimHei' },
  { name: '宋体', value: 'SimSun' },
  { name: '楷体', value: 'KaiTi' },
  { name: '微软雅黑', value: 'Microsoft YaHei' },
  { name: '翩翩体-简', value: 'Hanzipen SC' },
];

const fontFamilyOptions = fontFamilyArr.map(font => ({
  value: font.value,
  name: (
    <span
      style={{
        fontFamily: font.value,
      }}
    >
      {font.name}
    </span>
  ) as VNode,
}));

export const mapPropsToForm: Partial<PropsForm> = {
  text: {
    name: '文本',
    component: 'a-textarea',
    extraProps: {
      autoSize: { minRows: 2 },
    },
    afterTransformValue: (e: any) => e.target?.value,
  },
  fontSize: {
    name: '字号',
    component: 'a-input-number',
    extraProps: {
      style: { width: '100px' },
    },
    initTransformValue: (v: string): number => parseInt(v),
    afterTransformValue: (v: number): string => v.toString() + 'px',
  },
  lineHeight: {
    name: '行高',
    component: 'a-slider',
    extraProps: {
      max: 3,
      min: 0,
      step: 0.1,
    },
    initTransformValue: (v: string): number => parseFloat(v),
    afterTransformValue: (v: number): string => v.toString(),
  },
  textAlign: {
    name: '对齐',
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    afterTransformValue: (e: any): string => e.target.value,
    options: [
      { name: '左', value: 'left' },
      { name: '中', value: 'center' },
      { name: '右', value: 'right' },
    ],
  },
  color: {
    name: '颜色',
    valueProps: 'currentColor',
    component: 'color-picker',
    eventName: 'changeColor',
  },
  fontFamily: {
    name: '字体',
    component: 'a-select',
    subComponent: 'a-select-option',
    extraProps: {
      style: { width: '100px' },
    },
    options: [{ name: '无', value: '' }, ...fontFamilyOptions],
  },
};
