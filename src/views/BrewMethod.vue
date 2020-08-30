<template>
    <div class="columns is-multiline is-mobile">
        <div class="column has-text-centered is-6-tablet" @click="$router.push({name: 'ROUTE_COFFEE_STRENGTH'})">
            <div>Filter</div>
            <img height="400" width="300" src="@/assets/filter_machine.png"/>
        </div>
        <div class="column has-text-centered is-6-tablet" @click="$router.push({name: 'ROUTE_COFFEE_STRENGTH'})">
            <div>French Press</div>
            <img height="400" width="300"  src="@/assets/french_press.png"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "VueBrewMethod"
})
</script>


<style lang="scss" scoped>
.columns {
    padding: 0.5rem;
    margin: 0 !important;
}
.column {
    margin: 1rem;
    border-radius: 20px;
    background: #f29a62;
    max-height: calc(50vh-3rem);

    div {
        font-size:  xxx-large;
        font-family:'Pacifico', cursive;
    }

    img {
        max-height: 25vh;
        width: auto;
    }

}
</style>