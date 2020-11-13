export default {
  state: {
    locale: "ru-RU"
  },
  mutations: {
    toggleLocale(state, key) {
      return state.locale = key
    }
  },
  getters: {
    locale(state) {
      return state.locale
    }
  },
}