declare interface propsFormItem {
  component: string;
  subComponent?: string;
  subValueProps?: string;
  value?: any;
  valueProps?: string;
  name: string;
  extraProps?: {
    [k in string]: any;
  };
  options?: { name: string; value: string }[];
  eventName?: string;
  initTransformValue?: (v: any) => any;
  afterTransformValue?: (v: any) => any;
}

declare type PropsForm = {
  [k in keyof TextComponentProps]: propsFormItem;
};
