<template>
    <div>
        <h1 class="text-header">Take {{amountCoffeeBeans}} g of Coffee</h1>
        <h1 class="text-header">Use {{amountWater}} ml of water</h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "Result",
    computed: {
        amountWater(): number {
            return this.$store.state.cupCount * 150
        },
        ratio(): number {
            return 1 / (9 + this.$store.state.brewStrength)
        },
        amountCoffeeBeans(): number {
            return Math.round(this.amountWater * this.ratio)
        }
    }
})
</script>

<style lang="scss" scoped>

</style>
