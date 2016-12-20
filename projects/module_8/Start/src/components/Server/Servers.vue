<template>
    <div class="col-xs-12 col-sm-6">
      <server-name
        :serverID="servers">
      </server-name>
    </div>
</template>

<script>
  import ServerName from './ServerName.vue'
  import { eventBus } from '../../main'
  export default {
    data: function(){
      return {
        servers: [
          {id: 1, status: "Normal"},
          {id: 2, status: "Critical"},
          {id: 3, status: "Unknown"},
          {id: 4, status: "Normal"},
          {id: 5, status: "Offline"}
        ]
      };
    },
    components: {
      'server-name': ServerName
    },
    created() {
      eventBus.$on('normalizeServer', (server) => {
        this.servers.forEach(function(value){
          if(value.id == server.id){
            value.status = server.status;
          }
        })
      })
    }
  }
</script>
<style>

</style>
