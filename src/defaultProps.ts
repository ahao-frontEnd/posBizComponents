import { mapValues, without } from 'lodash-es'

export interface ICommonDefaultProps {
  actionType: string;
  url: string;
  height: string;
  width: string;
  padding: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string;
  opacity: number;
  position: string;
  left: string;
  top: string;
  right: string;
}

export interface ITextDefaultProps extends ICommonDefaultProps{
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

export interface IImageDefaultProps extends ICommonDefaultProps{
  src: string
}

// the common default props, all the components should have these props
export const commonDefaultProps: ICommonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  padding: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}

export const textDefaultProps: ITextDefaultProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

export const imageDefaultProps:IImageDefaultProps = {
  src: 'test.url',
  ...commonDefaultProps
}

// 获取css属性keys， 排除掉3个
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType', 'url', 'text'
)

export const imageStylePropNames = without(
  Object.keys(imageDefaultProps),
  'actionType', 'url', 'src',
)

export const transformToComponentProps = (props: ITextDefaultProps) => {
  return mapValues(props, item => {
    return {
      type: item.constructor as (StringConstructor | NumberConstructor),
      default: item
    }
  })
}

export const transformToComponentProps2 = (props: IImageDefaultProps) => {
  return mapValues(props, item => {
    return {
      type: item.constructor as (StringConstructor | NumberConstructor),
      default: item
    }
  })
}