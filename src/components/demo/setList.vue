<template>
  <div>
    <router-link to="/demo/getList">点击getList</router-link>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    mounted () {
      this.setList(['hello'])
    },
    methods: {
      ...mapMutations(['setList'])
    }
  }
</script>
