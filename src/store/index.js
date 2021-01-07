import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    isCollapse: false // 侧边栏 展开 收起 的状态
  },
  mutations: {
    increment (state) {
      state.count++
    },
    fold (state) {
      state.isCollapse = !state.isCollapse
    }
  }
})
export default store
