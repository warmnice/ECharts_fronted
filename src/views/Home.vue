<!--
    author: peaky
-->
<template>
  <div id="left">
    
  </div>
  <div>{{ store.count}}</div>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core.js"
import "../echarts/importre"
import { option } from "../echarts/left"
import { onMounted } from "vue";
import { useCounterStore } from "@/store/store"
import axiosInstance from '../api/axiosInstance';

// 获取用户数据
axiosInstance.get('/users')
  .then(response => {
    const users = response.data;
    // 在这里处理用户数据
    console.log(users);
  })
  .catch(error => {
    console.error(error);
  });

// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()
onMounted(() => {
  const myChart = echarts.init(document.getElementById("left"), null, {
    width : 600,
    height: 700 
  });
  myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
</style>
