<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <h1 class="text-header">How strong is your coffee ?</h1>
        </div>
        <div class="column">
            <v-slider
                hint="Im a hint"
                max="50"
                min="-50"
            ></v-slider>
            <br />
            <push-button @click="clickStrength(3)" text="STRONG" fontSize="large"/>
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
        clickStrength(strength: number) {
            this.$store.commit("setBrewStrength", strength)
            this.$router.push({name: "ROUTE_COFFEE_AMOUNT"})
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
