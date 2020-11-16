import {mapGetters, mapActions} from "vuex"

export default {
  data: () => ({
    linkLocales: [
      {id: 1, title: "RU", locale: "ru-RU", active: true},
      {id: 2, title: "EN", locale: "en-US", active: false},
    ],
  }),
  computed: {
    ...mapGetters(['locale']),
  },
  methods: {
    ...mapActions(['toggleLocale'])
  },
  mounted() {
    this.toggleLocale(localStorage.getItem('locale'))
  }
}