<template>
  <div class="main-layout">

    <Header
        @toRoute="toRoute"
        :linkRoutes="linkRoutes"
        :linkLocales="linkLocales"
    ></Header>

    <router-view/>

    <About ref="about"></About>
    <Skills ref="skills"></Skills>
    <Works ref="works"></Works>
    <Contacts ref="contact"></Contacts>
    <Footer/>

  </div>
</template>


<script>
  import Footer from '../components/app/Footer'
  import Header from '../components/app/Header'

  import {mapMutations} from "vuex"

  import About from '../views/About'
  import Skills from '../views/Skills'
  import Works from '../views/Works'
  import Contacts from '../views/Contacts'

  import {mapGetters} from "vuex"

  export default {
    name: 'main-layout',
    data: () => ({
      linkRoutes: [
        {id: 1, ref: '#home', title: 'Home', active: true, height: ''},
        {id: 2, ref: '#about', title: 'About', active: false},
        {id: 3, ref: '#skills', title: 'Skills', active: false},
        {id: 4, ref: '#works', title: 'Works', active: false},
        {id: 5, ref: '#contacts', title: 'Contacts', active: false},
      ],
      linkLocales: [
        {id: 1, title: "RU", locale: "ru-RU", active: true},
        {id: 2, title: "EN", locale: "en-US", active: false},
      ],

    }),
    computed: {
      ...mapGetters(['locale']),
      gett() {
        console.log(this.linkRoutes[0].height)
        //return this.linkRoutes[0].name.length ? "Fdf"
      }
    },
    components: {
      Header, Footer, About, Skills, Works, Contacts
    },
    methods: {
      ...mapMutations(['toggleLocale']),
      toRoute(id) {
        this.linkRoutes.map(link => link.active = link.id === id)
      },

    },

    async mounted() {
      await this.toggleLocale(localStorage.getItem('locale'))


      const links = new Map()

      this.linkRoutes.forEach(link => {
        const $link = document.querySelector(link.ref)

        if ($link) {
          const {bottom} = $link.getBoundingClientRect()
          links.set(link.id, {
            bottom,
            id: link.id
          })
        }

      })
      window.addEventListener("scroll", () => {
        const {scrollY} = window
        // console.log(scrollY)
        // console.log(links.get(4).bottom)
        if (scrollY < links.get(2).bottom) {
          return this.linkRoutes.map(link => link.active = link.id === 1)

        }

        const rr = [...links].reduce((acc, el) => {
          //  console.log(acc)
          // return acc = el
          if (scrollY >= acc[1].bottom  && scrollY <= el[1].bottom - 100) {
            this.linkRoutes.map(link => link.active = link.id === el[1].id -1 )
            return acc = el
          }
          if(scrollY > el[1].bottom && el[1].id === 5){
            this.linkRoutes.map(link => link.active = link.id === el[1].id)

          }

          // console.log("acc", acc[1].bottom)
          // console.log("el", el[1].bottom)
          // console.log("window", scrollY)

          return acc = el

          // console.log(acc)
          // if (el.bottom === window.scrollY) {
          //this.linkRoutes.map(link => link.active = link.id === el.id)
          //
          // }
          // console.log("el",el.el, el.height)
        })

        // console.log(links)

      })
    },


  }
</script>
<style scoped>
  .main-layout {
    border-top: 1px solid transparent;
    /*position: relative;*/
    box-sizing: border-box;
  }


</style>
