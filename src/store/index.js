import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import dialog_store from './modules/dialog_store'
import setList from './modules/setList'
import todoList from './modules/todoList'

export default new vuex.Store({
  modules: {
    dialog: dialog_store,
    setList: setList,
    todoList: todoList
  }
})
