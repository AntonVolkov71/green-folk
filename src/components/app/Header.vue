<template>
  <div class="header navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <span>
          <a href="#" class="brand-logo hide-on-med-only">Logo</a>
        </span>
        <span>
          <ul id="nav-mobile" class=" hide-on-small-only show-on-medium-and-up">
         <li
             v-for="link of links"
             :key="link.id"
             :class="{'active': link.active}"
             @click="handlerLink( link.ref)"
         >
           <router-link
               :to="link.ref"
           >{{link.title | localize}}</router-link>
         </li>
        </ul>
        </span>
        <span>
          <ul class="hide-on-med-and-down">
            <li
                v-for="loc in linkLocales"
                :key="loc.id"
                :class="{'active': locale === loc.locale}"
                @click="handlerLocale(loc.locale)"
            >
              <a>{{loc.title}}</a>
            </li>
        </ul>
        </span>
      </div>
    </nav>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex"
  import scroll from '@/utils/scroll'

  export default {
    name: "Header",
    props: ['linkLocales'],
    computed: {
      ...mapGetters(['locale', 'links']),
    },
    methods: {
      ...mapActions(['toggleLocale']),
      handlerLink(ref) {
        scroll(ref)
      },
      handlerLocale(key) {
        this.toggleLocale(key)
        localStorage.setItem('locale', key)
      },
    }
  }


</script>

<style scoped>


</style>

