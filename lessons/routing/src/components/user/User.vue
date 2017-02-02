<template>
  <div class="">
    <h1>The User Page</h1>
    <button type="button" name="button" class="btn btn-primary" @click="navigateToHome">Go To Home</button>
    <hr>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

</template>
<script type="text/javascript">
  export default {
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }
</script>
<style media="screen">
  .slide-enter{

  }
  .slide-enter-active{
    animation: slide-in 0.5s ease-out forwards;
    transition: all 0.5s;
  }
  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 0.5s ease-out forwards;
    transition: all 0.5s;
  }

  @keyframes slide-in {
    from{
      opacity: 0;
      transform: translateX(-120px);
    }
    to{
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes slide-out {
    from{
      opacity: 1;
      transform: translateX(0px);
    }
    to{
      opacity: 0;
      transform: translateX(-120px);
    }
  }
</style>
