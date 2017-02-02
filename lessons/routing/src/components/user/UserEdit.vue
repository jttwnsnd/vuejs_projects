<template>
  <div class="">
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Query: {{ $route.query.q }}</p>
    <hr>
    <button type="button" name="button" class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div class="" style="height: 700px"></div>
    <p id="data">Something down here</p>
  </div>

</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed){
        next();
      }else{
        if(confirm('Are you sure?')){
          next();
        }else{
          next(false);
        }
      }

    }
  }
</script>
