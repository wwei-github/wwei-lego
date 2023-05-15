import { mapValues, without } from 'lodash-es';

export const commonDefaultProps: CommonDefaultProps = {
  // actions （事件功能）
  actionType: '',
  url: '',
  // size      （尺寸:）
  height: '',
  width: '100%',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type （边框:）
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity (阴影与透明度:)
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y  (位置:)
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
};

export const textDefaultProps: TextDefaultProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
};

export const textStyleComponentProps = without(
  Object.keys(textDefaultProps),
  ...['text', 'actionType', 'url']
);

export const transformToComponentProps = (props: TextDefaultProps) =>
  mapValues(props, i => {
    return {
      type: i.constructor,
      default: i,
    };
  });
