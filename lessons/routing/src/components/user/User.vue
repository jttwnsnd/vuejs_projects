<template>
  <div class="">
    <h1>The User Page</h1>
    <button type="button" name="button" class="btn btn-primary" @click="navigateToHome">Go To Home</button>
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
