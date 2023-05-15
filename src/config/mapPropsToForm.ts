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
  fontFamily: {
    name: '字体',
    component: 'a-select',
    subComponent: 'a-select-option',
    extraProps: {
      style: { width: '100px' },
    },
    options: [
      { name: '无', value: '' },
      { name: '黑体', value: 'SimHei' },
      { name: '宋体', value: '宋体' },
      { name: '微软雅黑', value: 'Microsoft YaHei' },
    ],
  },
};
