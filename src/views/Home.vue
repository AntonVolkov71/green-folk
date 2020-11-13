<template>
  <div class="home" id="home">
    <h1>Volkov</h1>
    <button @click="handlerBtnNext">DOWN</button>
  </div>
</template>

<script>
  import scroll from '@/utils/scroll'

  export default {
    name: 'Home',
    methods: {
      handlerBtnNext() {
        scroll("#about")
        // прокрутка плавная
        // document.querySelector("#about").scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start'
        // })
      }
    }

  }
</script>
<style scoped>
  .home {
    /*border: 1px solid red;*/
    border-bottom: 1px solid transparent;

    padding-top: 70px;
    margin: 0;

    height: 100vh;

    background-color: antiquewhite;

  h1 {
    margin: 0;

  }

  }
</style>