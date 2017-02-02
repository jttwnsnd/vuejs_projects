import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = ('http://vuejs-http-b4077.firebaseio.com/');
Vue.http.options.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == "POST"){
    request.method = "PUT";
  }
  next(response => {
    response.json = () => { return {messages: repsonse.body} }
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
