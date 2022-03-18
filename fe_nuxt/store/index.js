export const state = () => ({
  globalData: {}
})

export const mutations = {
  STORE_GLOBAL_STATE(state, globalData) {
    state.globalData = globalData
  }
}

export const getters = {
  getGlobalData(state) {
    return state.globalData
  }
}
