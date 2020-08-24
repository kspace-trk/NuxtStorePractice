import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        message: "This is store massage!",
        counter: 0
      };
    },
    mutations: {
      count(state) {
        state.counter++;
      },
      reset(state) {
        state.counter = 0;
      }
    }
  });
};
export default createStore;
