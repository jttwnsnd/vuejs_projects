import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    selectServer(server){
      this.$emit('serverSelected', server)
    },
    setNormal(status){
      this.$emit('normalizeServer', status)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
