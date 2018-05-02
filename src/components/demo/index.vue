<template>
  <div>
    <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击弹出</a>
    <router-link to="/demo/setList">点击setList</router-link>
    <router-link to="/demo/todoInput">添加todoInput</router-link>
    <t-dialog></t-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
  import dialog from './dialog'
  import setList from './setList'
  export default {
    components:{
      "t-dialog":dialog
    }
  }
</script>
