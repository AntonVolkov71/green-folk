import Vue from 'vue'
import Vuex from 'vuex'


import locale from './modules/locale'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    locale
  }
})
