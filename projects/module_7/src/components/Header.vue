<template lang="html">
  <div class="row">
    <div class="col-xs-12">
        <header>
            <server-title></server-title>
        </header>
    </div>
  </div>
</template>

<script>
import ServerTitle from './ServerTitle.vue'

export default {
  components: {
    "server-title": ServerTitle
  }
}
</script>

<style lang="css">
</style>
