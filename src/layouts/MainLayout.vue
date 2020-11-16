<template>
  <div class="main-layout">
    <Header
        :linkLocales="linkLocales"
    ></Header>

    <Home ref="home"></Home>
    <About ref="about"></About>
    <Skills ref="skills"></Skills>
    <Works ref="works"></Works>
    <Contacts ref="contact"></Contacts>
    <Footer/>

  </div>
</template>


<script>
  import srollMixin from '../mixins/scroll.mixin'
  import localeMixin from '../mixins/locale.mixin'

  import Footer from '../components/app/Footer'
  import Header from '../components/app/Header'

  import Home from '../views/Home'
  import About from '../views/About'
  import Skills from '../views/Skills'
  import Works from '../views/Works'
  import Contacts from '../views/Contacts'

  export default {
    name: 'main-layout',
    mixins: [srollMixin, localeMixin],
    components: {
      Header, Footer, Home, About, Skills, Works, Contacts
    },
  }
</script>

<style scoped>

</style>
