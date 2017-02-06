<template>
  <div class="">
    <p>Counter is: {{ counter }}</p>
    <p>Counter has had {{ clicks }}</p>
  </div>

</template>

<script>
    export default {
        computed: {
          counter(){
            return this.$store.getters.doubleCounters;
          },
          clicks(){
            return this.$store.getters.stringCounter;
          }
        }
    }
</script>
