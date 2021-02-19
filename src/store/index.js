import { createStore } from "vuex";

export default createStore({
  state: {
    count: 2
  },
  getters: {
    countDouble: state => {
      return state.count * 2;
    }
  },
  mutations: {
    setCount: (state, newCount) => {
      state.count = newCount;
    }
  },
  actions: {},
  modules: {}
});
