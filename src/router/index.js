import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/demo/index'
import SetList from '@/components/demo/setList'
import GetList from '@/components/demo/getList'
import TodoInput from '@/components/demo/todoInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/demo/getList',
      name: 'GetList',
      component: GetList
    },
    {
      path: '/demo/setList',
      name: 'SetList',
      component: SetList
    },
    {
      path: '/demo/todoInput',
      name: 'TodoInput',
      component: TodoInput
    }
  ]
})
