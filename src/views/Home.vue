<template>
  <div class="home scrollspy" id="home">
    <div class="home__content container">
      <h1 class="home__title ">{{"I'm Anton Volkov" | localize}}</h1>
    <p class="home__description container">{{"textHomeDesc" | localize}}</p>
    </div>
<!--    <a class=" btn-floating btn-large pulse home__link-down" @click.prevent="handlerBtnNext"><i class="material-icons">expand_more</i></a>-->
    <a class=" btn-floating btn-large pulse home__link-down" @click.prevent="handlerBtnNext">&or;</a>
<!--  <button @click="handlerBtnNext"><i class="material-icons">add</i></button>-->
  </div>
</template>

<script>
  import scroll from '@/utils/scroll'

  export default {
    name: 'Home',
    methods: {
      handlerBtnNext() {
        scroll("#about")
      }
    }

  }
</script>
<style scoped>
  .home {
    background: url("../assets/images/back-app.jpg") no-repeat center center;
  }
</style>