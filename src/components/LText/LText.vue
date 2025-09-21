<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import {
  transformToComponentProps, textDefaultProps,
  textStylePropNames,type ITextDefaultProps
} from '@/defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps)
</script>
<script setup lang="ts">
import useComponentCommon from '@/hooks/useComponentCommon'

defineOptions({
  name: 'l-text'
})

// defineProps 和 setup 作用域是分开的，defaultProps 需要定义在 setup 外部，才可以拿到对应变量
const props = defineProps({
  ...defaultProps,
  tag: {
    type: String,
    default: () => 'div'
  },
  isEditing: Boolean
})

const { styleProps, handleClick } = useComponentCommon(
  props as Readonly<Partial<ITextDefaultProps>>,
  textStylePropNames,
  props.isEditing
)
</script>

<style scoped>
.l-text-component {
  position: relative !important;
}
</style>