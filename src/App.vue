<template>
  <div id="app">
    <component v-bind:is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from "./layouts/MainLayout"

  export default {
    computed: {
      layout() {
        const {layout = "main"} = this.$route.meta;

        return `${layout}-layout`
      }
    },
    components: {
      MainLayout
    }
  }
</script>
<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import "assets/styles/main";
  @import 'assets/styles/normalize.css'
</style>
