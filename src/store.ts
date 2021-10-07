import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface CoffeeState {
  brewMethod: number,
  brewStrength: number,
  cupCount: number
}

export default new Vuex.Store({
  state: {
    brewMethod: 0,
    brewStrength: 0,
    cupCount: 0
  } as CoffeeState,
  mutations: {
    setBrewMethod(state: CoffeeState, val: number ) {
       state.brewMethod = val
    },
    setBrewStrength(state: CoffeeState, val: number ) {
       state.brewStrength = val
    },
    setCupCount(state: CoffeeState, val: number ) {
       state.cupCount = val
    },
  }
});
