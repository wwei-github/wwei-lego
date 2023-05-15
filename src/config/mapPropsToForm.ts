export const mapPropsToForm: Partial<PropsForm> = {
  text: {
    name: '文本',
    component: 'a-textarea',
    extraProps: {
      autoSize: { minRows: 2 },
    },
  },
  fontSize: {
    name: '字号',
    component: 'a-input-number',
  },
  lineHeight: {
    name: '行高',
    component: 'a-slider',
    extraProps: {
      max: 3,
      min: 0,
      step: 0.1,
    },
  },
};
