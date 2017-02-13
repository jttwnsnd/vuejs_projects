<template>
    <div class="container">
      <app-nav></app-nav>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    import Nav from './components/Nav.vue';

    export default {
      components: {
        appNav: Nav
      },
      created(){
        this.$store.dispatch('initStocks');
      }
    }
</script>

<style>
body{
  padding: 30px;
}
.slide-enter{
}
.slide-enter-active{
  animation: slide-in 0.5s ease-in forwards;
  transition: all 0.5s;
}
.slide-leave{}
.slide-leave-active{
  animation: slide-out 0.5s ease-in forwards;
  transition: all 0.5s;
}

@keyframes slide-in{
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transfrom: translateY(0px);
  }
}

@keyframes slide-out{
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}

</style>
