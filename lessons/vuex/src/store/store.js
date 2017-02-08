import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./modules/counter";

Vue.use(Vuex);



//actions are for async things regarding state. commit to a mutation, which runs synchronously.
export const store = new Vuex.Store({
  state: {
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    counter
  }
});
