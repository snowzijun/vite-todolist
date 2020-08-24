/*
 * @Author: 子君
 * @Date: 2020-08-24 12:53:11
 * @LastEditors: 子君
 * @LastEditTime: 2020-08-24 12:53:57
 * @Description: 文件说明
 * @FilePath: \my-vue3\src\store\index.ts
 */
import { createStore } from 'vuex'


interface State {
  userName: string
}

export default createStore({
  state(): State {
    return {
      userName: "子君",
    };
  },
});