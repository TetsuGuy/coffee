<template>
    <div>
        <push-button text="Filter"  @click="clickChoice(1)"/>
        <push-button text="Press" @click="clickChoice(2)"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    name: "VueBrewMethod",
    methods: {
        clickChoice(choice: number) {
            this.$store.commit("setBrewMethod", choice)
            this.$router.push({name: "ROUTE_COFFEE_STRENGTH"})
        }
    }
})
</script>
