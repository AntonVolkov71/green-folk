<template>
  <div class="footer">
    <button @click="handlerBtnUp">DOWN</button>

  </div>
</template>

<script>
  import scroll from '@/utils/scroll'

  export default {
    methods: {
      handlerBtnUp() {
        scroll("#home")
      }
    }
  }
</script>