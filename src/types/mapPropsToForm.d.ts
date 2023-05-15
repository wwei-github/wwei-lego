declare interface propsFormItem {
  component: string;
  value?: any;
  name: string;
  extraProps?: {
    [k in string]: any;
  };
}

declare type PropsForm = {
  [k in keyof TextComponentProps]: propsFormItem;
};
