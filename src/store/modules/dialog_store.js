export default {
  state:{
    show:false
  },
  getters:{
    not_show(state){//这里的state对应着上面这个state
      return !state.show;
    }
  },
  mutations:{//不要在该属性下执行异步
    switch_dialog(state){//这里的state对应着上面这个state
      state.show = state.show?false:true;
    }
  },
  actions:{//推荐将异步操作放在这里
    switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog');
      //你还可以在这里触发其他的mutations方法
    }
  }
}
