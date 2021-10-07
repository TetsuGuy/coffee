<template>
    <div>
        <h1 class="text-header">How many cups?</h1>
        <div class="button-panel">
            <push-button :key="i" v-for="i in [1,2,3,4,5,6,7,8,9]" color="#ffe75d" :text="`${i}`" @click="clickCupAmount(i)"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import PushButton from "../components/PushButton.vue"
export default Vue.extend({
  components: {
      PushButton
  },
  methods: {
      clickCupAmount(amount: number) {
          this.$store.commit("setCupCount", amount)
          this.$router.push({name: "ROUTE_COFFEE_RESULT"})
      }
  }
})
</script>

<style lang="scss" scoped>
.button-panel {
    display: inline-flex;
    flex-wrap: wrap; 
    max-width: 500px;
    width: 100vw;
    justify-content: space-around;

    .push-button {
        margin: auto;
    }
    .push-button__shell {
        margin: 0.2rem;
    }
}
</style>
