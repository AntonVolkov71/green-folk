export default {
  state: {
    locale: "ru-RU"
  },
  mutations: {
    setLocale(state, key) {
      return state.locale = key
    }
  },
  actions:{
    toggleLocale({commit}, key) {
      commit('setLocale', key)
    }
  },
  getters: {
    locale(state) {
      return state.locale
    }
  },

}