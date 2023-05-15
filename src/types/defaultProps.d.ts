declare interface CommonDefaultProps {
  actionType: string;
  url: string;
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string;
  opacity: string;
  position: string;
  left: string;
  top: string;
  right: string;
}
declare interface TextDefaultProps extends CommonDefaultProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

declare interface TextComponentProps extends TextDefaultProps {
  tag: string;
}
