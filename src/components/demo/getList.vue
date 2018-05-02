<template>
  <div>
    {{getList}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getList' ])
    },
    mounted () {
      console.log(this.$store.state.setList.list)     // ['hello']
      console.log(this.getList)               // ['hello']
    }
  }
</script>
