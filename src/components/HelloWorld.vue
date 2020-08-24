<!--
 * @Author: 子君
 * @Date: 2020-08-24 12:29:59
 * @LastEditors: 子君
 * @LastEditTime: 2020-08-24 12:35:43
 * @Description: 文件说明
 * @FilePath: \my-vue3\src\components\HelloWorld.vue
-->
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>