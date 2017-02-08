const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter--;
  }
};

const actions = {
  increment: ({commit}, payload) => {
    commit('increment', payload);
  },
  decrement: ({commit}) => {
    commit('decrement');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
