<template>
    <div>
        <push-button
            font-size="xxx-large"
            :key="i" v-for="i in [1,2,3,4,5,6,7,8,9]"
            :text="`${i}`"
            @push-start="setLoading(true)"
            @push-end="clickCupAmount(i)"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import {mapMutations} from "vuex";
import {ROUTE_COFFEE_RESULT} from "@/routes";
export default Vue.extend({
  methods: {
      ...mapMutations(["setLoading", "setCupCount"]),
      clickCupAmount(amount: number) {
          this.setLoading(false)
          this.setCupCount(amount)
          this.$router.push({name: ROUTE_COFFEE_RESULT})
      }
  }
})
</script>
