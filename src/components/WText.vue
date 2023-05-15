<template>
  <component :is="tag" :style="styleProps" @click="handleClick">{{ text }}
  </component>
</template>

<script setup lang="ts">
import {
  textDefaultProps,
  textStyleComponentProps,
  transformToComponentProps
} from '@/config/defaultProps';
import useComponentCommon from '@/hooks/useComponentCommon';

interface propsType  {
  tag: string;
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

const props =withDefaults(defineProps<propsType>(),{
  tag: "div",
  ...textDefaultProps
}) 
const { styleProps, handleClick } = useComponentCommon(props, textStyleComponentProps);
</script>

<style></style>
