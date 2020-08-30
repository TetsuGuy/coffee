<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-12">
            <h1 style="font-size: xxx-large;font-style: italic;color: #ffe67f;">How do you make coffee?</h1>
        </div>
        <div class="column has-text-centered">
            <img height="400" width="300" src="@/assets/filter_machine.png"/>
            <push-button fontSize="x-large" text="Filter"  @click="$router.push({name: 'ROUTE_COFFEE_STRENGTH'})"/>
        </div>
        <div class="column has-text-centered" >
            <img height="400" width="300"  src="@/assets/french_press.png"/>
            <push-button fontSize="x-large" text="Press" @click="$router.push({name: 'ROUTE_COFFEE_STRENGTH'})"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PushButton from "../components/PushButton.vue"
export default Vue.extend({
    name: "VueBrewMethod",
    components: {
        PushButton
    }
})
</script>


<style lang="scss" scoped>
.column {
    div {
        font-size: xxx-large;
        font-style: italic;
        font-family:'Pacifico', cursive;
        margin: auto;
    }

    img {
        max-height: 25vh;
        width: auto;
        filter: drop-shadow(2px 4px 6px white);
    }
}
</style>