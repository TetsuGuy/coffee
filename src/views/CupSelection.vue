<template>
    <div>
        <push-button font-size="xxx-large" :key="i" v-for="i in [1,2,3,4,5,6,7,8,9]" :text="`${i}`" @click="clickCupAmount(i)"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  methods: {
      clickCupAmount(amount: number) {
          this.$store.commit("setCupCount", amount)
      }
  }
})
</script>
