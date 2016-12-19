<template lang="html">
  <div class="row">
      <div class="col-xs-12">
          <manage-servers></manage-servers>
      </div>
  </div>
</template>

<script>
import ManageServers from './ManageServers.vue'
export default {
  components: {
    'manage-servers': ManageServers
  }
}
</script>

<style lang="css">
</style>
