import Vue from 'vue'
import Vuex from 'vuex'


import locale from './modules/locale'
import links from './modules/links'
import skillsView from './modules/skillsView'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    locale, links, skillsView
  }
})
