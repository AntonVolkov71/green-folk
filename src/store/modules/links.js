import router from '../../router/index'

export default {
  state: {
    links: [
      {id: 1, ref: '#home', title: 'Home', active: false,},
      {id: 2, ref: '#about', title: 'About', active: false},
      {id: 3, ref: '#skills', title: 'Skills', active: false},
      {id: 4, ref: '#works', title: 'Works', active: false},
      {id: 5, ref: '#contacts', title: 'Contacts', active: false},
    ]
  },
  mutations: {
    setLinkActive(state, ref) {
      return state.links.map(link => {
        link.active = link.ref === `#${ref}`

        if (link.ref === `#${ref}` && link.ref !== window.location.hash) {
          router.push(`${link.ref}`)
        }
        return link
      })
    },
  },
  actions: {
    updateLinks({commit}, ref = '') {
      commit('setLinkActive', ref)
    }
  },

  getters: {
    links(state) {
      return state.links
    }
  },
}