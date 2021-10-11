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
  },
  getters: {
    amountWater(state: CoffeeState): number {
      return state.cupCount * 150
    },
    ratio(state: CoffeeState): number {
      return 1 / (9 + state.brewStrength)
    },
    amountCoffeeBeans(state: CoffeeState): number {
      return Math.round(state.cupCount * 150 / (9 + state.brewStrength))
    },
    result(state: CoffeeState, getters: any): string {
      if(state.brewMethod && state.brewStrength && state.cupCount) {
        return `Water: ${getters.amountWater}ml,<br>Coffee: ${getters.amountCoffeeBeans}g`
      } else {
        return ""
      }
    }
  }
});
