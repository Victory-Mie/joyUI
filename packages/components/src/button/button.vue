<template>
  <button  class="joy-button" :class="buttonStyle"><slot/></button>
</template>

<script lang="ts" setup> 
import "./style/index.less";
import { computed } from "vue";
//import { buttonProps } from './type'
//使用defineOptions函数定义组件名
defineOptions({ name: "joy-button" });

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`joy-button--${buttonProps.type}`]: buttonProps.type };
});
</script>