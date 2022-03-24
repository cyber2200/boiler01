export const state = () => ({
  loadingState : false,
  form01FullName : ""
})

export const mutations = {
  updateForm01FullName(state, fullName) {
    state.form01FullName = fullName
  },
  updateLoadingState(state, loadingState) {
    state.loadingState = loadingStates
  }
}
