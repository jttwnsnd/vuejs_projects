<template>
  <div class="">
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter has had {{ stringCounter }}</p>
  </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
      computed: {
        ...mapGetters([
          'doubleCounter',
          'stringCounter'
        ])
      }
    }
</script>
