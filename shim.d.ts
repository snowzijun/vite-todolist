/*
 * @Author: 子君
 * @Date: 2020-08-24 12:36:51
 * @LastEditors: 子君
 * @LastEditTime: 2020-08-24 12:37:33
 * @Description: 文件说明
 * @FilePath: \my-vue3\shim.d.ts
 */
declare module "*.vue" {
  import { Component } from 'vue';
  const component:Component;
  export default component;
}