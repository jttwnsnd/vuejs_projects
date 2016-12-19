<template>
    <div class="container">
        <header-wrapper></header-wrapper>
        <hr>
        <servers></servers>
        <hr>
        <footer-wrapper></footer-wrapper>
    </div>
</template>

<script>
  import Header from './Header.vue'
  import Servers from './Servers.vue'
  import Footer from './Footer.vue'

  export default{
    components: {
      "header-wrapper": Header,
      "servers": Servers,
      "footer-wrapper": Footer
    }
  }
</script>

<style>

</style>
