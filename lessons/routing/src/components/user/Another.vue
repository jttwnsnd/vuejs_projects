<template>
  <div class="">
    <h1>User {{ id }}</h1>
    <p>Loaded ID: {{ id }}</p>
    <button type="button" name="button" class="btn btn-primary" @click="navigateToHome">Go To Home</button>
  </div>

</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }
</script>
