import { computed } from 'vue'
import { pick } from 'lodash-es'
import { type ITextDefaultProps, type IImageDefaultProps } from '../defaultProps'

const useComponentCommon = (props: Readonly<Partial<ITextDefaultProps>>, picks: string[], isEditing: boolean) => {
  // pick 从对象中，根据提供的keys，进行筛选，返回一个筛选后的对象
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url && !isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

const useComponentCommon2 = (props: Readonly<Partial<IImageDefaultProps>>, picks: string[], isEditing: boolean) => {
  // pick 从对象中，根据提供的keys，进行筛选，返回一个筛选后的对象
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url && !isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export {
  useComponentCommon2
}

export default useComponentCommon