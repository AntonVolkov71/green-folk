<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <span>
          <a href="#" class="brand-logo">Logo</a>
        </span>
        <span>
          <ul id="nav-mobile" class="hide-on-med-and-down">
         <li
             v-for="link of linkRoutes"
             :key="link.id"
             :class="{'active': link.active}"
             @click="handlerLink(link.id, link.ref)"
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
                @click.prevent="changeLocales(loc.locale)">
              <a>{{loc.title}}</a>
            </li>
        </ul>
        </span>
      </div>
    </nav>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex"
  import scroll from '@/utils/scroll'

  export default {
    name: "Header",
    props: ['linkRoutes', 'linkLocales'],
    computed: {
      ...mapGetters(['locale']),
    },
    methods: {
      ...mapMutations(['toggleLocale']),
      handlerLink(id, ref) {
        scroll(ref)
        this.$emit("toRoute", id)
      },
      changeLocales(key) {
        this.toggleLocale(key)
        localStorage.setItem('locale', key)
      },
    }
  }


</script>

<style scoped>
  .navbar-fixed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    height: 70px;

    border: 1px solid transparent;

  }

</style>

