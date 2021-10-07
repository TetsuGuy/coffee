<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <h1 class="text-header">How strong is your coffee ?</h1>
        </div>
        <div class="column">
            <push-button @click="clickStrength(1)" text="MILD" fontSize="large"/>
        </div>
        <div class="column">
             <push-button @click="clickStrength(2)" text="MEDIUM" fontSize="large"/>
        </div>
        <div class="column">
            <push-button @click="clickStrength(3)" text="STRONG" fontSize="large"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    methods: {
        clickStrength(strength: number) {
            this.$store.commit("setBrewStrength", strength)
            this.$router.push({name: "ROUTE_COFFEE_AMOUNT"})
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
