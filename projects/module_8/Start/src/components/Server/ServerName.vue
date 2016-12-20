<template lang="html">
  <ul class="list-group">
    <li class="list-group-item"
      v-for="server in serverID"
      @click="selectServer(server)">
      Server # {{ server.id }}
    </li>
  </ul>
</template>

<script>
import { eventBus } from "../../main"

export default {
  props: ['serverID'],
  methods: {
    selectServer(server) {
      eventBus.selectServer(server);
    }
  }
}
</script>

<style lang="css">
</style>
