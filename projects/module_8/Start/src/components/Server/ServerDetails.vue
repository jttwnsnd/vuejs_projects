<template>
    <div class="col-xs-12 col-sm-6" v-if="serverFocus">
        <p>Server #{{ serverNumber }} selected. Status: {{ serverStatus }}</p>
        <button @click="statusNormal">Normalize</button>
    </div>

</template>

<script>
  import { eventBus } from "../../main"

  export default{
    data: function(){
      return{
        serverFocus: false,
        serverID: '',
        serverStatus: ''
      }
    },
    created() {
      eventBus.$on('serverSelected', (data) => {
        this.serverFocus = true;
        this.serverNumber = data.id;
        this.serverStatus = data.status;
      })
    },
    methods: {
      statusNormal() {
        this.serverStatus = 'Normal';
        eventBus.setNormal({status: this.serverStatus, id: this.serverNumber});
      }
    }
  }
</script>

<style>

</style>
