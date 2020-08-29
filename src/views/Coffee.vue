<template>
  <div style="padding: 2rem;">
    <h1>Coffee Calculator</h1>
    <div class="coffee-preparation">
      <i :class="coffeePreparationIcon"/>
    </div>
    <v-slider
            v-model="preparationMethodChosen"
            class="align-center"
            tick-size="2"
            :tick-labels="['Filter','French Press']"
            :max="1"
            :min="0"
          />

    <div class="coffee-strength">
      <i class="fa fa-coffee" :style="{'color': coffeeStrengthColor}"/>
      </div>
    <v-slider
            v-model="coffeeStrengthChosen"
            class="align-center"
            tick-size="3"
            :tick-labels="['Mild','Medium','Strong']"
            :max="2"
            :min="0"
          />

    <div style="padding: 0.5rem; margin-top: 1rem;">
      <i v-for="(i, index) in new Array(amountCoffeeCups)" :key="index" class="fa fa-coffee" style="font-size: 6vw;"/>
    </div>
    <v-slider
            v-model="amountCoffeeCups"
            class="align-center"
            :max="10"
            :min="1"
          />
          <div style="text-align: center;">{{amountCoffeeCups}} Cups</div>
  </div>
</template>

<script lang="ts">

// todo: make 1 view per interaction: brew method, brew strength, coffee amount (1-9 selection is better than a slider)
// remove sliders and use just big buttons with icons and text instead

import Vue from "vue"

export default Vue.extend({
  data: () => {return {
          amountCoffeeCups: 1,
          preparationMethodChosen: 0,  // todo: enum
          coffeeStrengthChosen: 1  // todo: enum
  }},
  computed: {
    coffeePreparationIcon(): string {
      return this.preparationMethodChosen === 0 ? "fa fa-filter" : "fa fa-database"
    },
    coffeeStrengthColor(): string {
      switch(this.coffeeStrengthChosen) {
        case 0: 
          return "#582200"
        case 1: 
          return "#311300" 
        case 2:
        default: 
          return "#210d00"
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.coffee-strength, .coffee-preparation {
  height: 100px;
  display: flex;
  i {
    margin: auto;
    font-size: 100px;
  }
}
</style>
