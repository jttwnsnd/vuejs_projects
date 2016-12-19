<template lang="html">
  <div class="row">
      <server-list></server-list>
      <div class="col-xs-12 col-sm-6">
          <p>{{ message }}</p>
      </div>
  </div>
</template>

<script>
import ServerList from './ServerList.vue'
export default {
  data: function() {
    return {
      message: "Server Details are currently not updated"
    }
  },
  components: {
    'server-list': ServerList
  }
}
</script>

<style lang="css">
</style>
