<template>
    <div>
        <push-button @click="clickStrength(1)" text="Mild" fontSize="large"/>
        <push-button @click="clickStrength(2)" text="Normal" fontSize="large"/>
        <push-button @click="clickStrength(3)" text="Strong" fontSize="large"/>
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
