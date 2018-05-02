const state = {          // 组件间共享的数据
  list: []
}

const mutations = {      // 修改共享数据
  setList: (state, value) => {
    state.list = value
  }
}

const getters = {        // 获取共享数据
  getList: state => {
    return state.list
  }
}

export default {
  getters,
  state,
  mutations
}
