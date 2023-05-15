import { textDefaultProps } from './defaultProps';

const defaultTextTemplatesComponents: Partial<TextComponentProps>[] = [
  {
    tag: 'h1',
    text: '大标题',
    fontSize: '20px',
    width: '100px',
    position: 'relative',
  },
  {
    tag: 'p',
    text: '正文内容',
    fontSize: '16px',
    width: '100px',
    position: 'relative',
  },
  {
    tag: 'p',
    text: '链接内容',
    fontSize: '16px',
    textDecoration: 'underline',
    position: 'relative',
  },
  {
    text: '按钮内容',
    color: '#fff',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    width: '100px',
    tag: 'button',
    textAlign: 'center',
    position: 'relative',
  },
];

export default defaultTextTemplatesComponents.map(template => ({
  ...textDefaultProps,
  ...template,
}));
