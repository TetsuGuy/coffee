<template>
    <div>
        <push-button font-size="xx-large"  label="Filter" text="A" @push-start="setLoading(true)"  @push-end="clickChoice(1)"/>
        <push-button font-size="xx-large"  label="Press" text="B" @push-start="setLoading(true)" @push-end="clickChoice(2)"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import {ROUTE_COFFEE_STRENGTH} from "@/routes";
import {mapMutations} from "vuex";
export default Vue.extend({
    name: "VueBrewMethod",
    methods: {
        ...mapMutations(["setLoading", "setBrewMethod"]),
        clickChoice(choice: number) {
            this.setLoading(false)
            this.setBrewMethod(choice)
            this.$router.push({name: ROUTE_COFFEE_STRENGTH})
        }
    }
})
</script>
