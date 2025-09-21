<template>
  <h4>业务组件库模板...</h4>
  <l-text fontSize="22px" color="red"></l-text>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue';
interface ITest {
  name: string
}
const user: ITest = { name: 'test' };

onMounted(() => {
  const instance = getCurrentInstance()
  console.log(instance);
  console.log(user);
})
</script>

<style scoped>
h4 {
  color: red;
}
</style>
