<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <h1 style="font-size: xxx-large;font-style: italic;color: #ffe67f;">How strong is your coffee ?</h1>
        </div>
        <div class="column">
            <push-button @click="$router.push({name: 'ROUTE_COFFEE_AMOUNT'})" text="MILD" fontSize="large"/>
        </div>
        <div class="column">
             <push-button @click="$router.push({name: 'ROUTE_COFFEE_AMOUNT'})" text="MEDIUM" fontSize="large"/>
        </div>
        <div class="column">
            <push-button @click="$router.push({name: 'ROUTE_COFFEE_AMOUNT'})" text="STRONG" fontSize="large"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PushButton from "../components/PushButton.vue"
export default Vue.extend({
    components: {
        PushButton
    }
})
</script>

<style lang="scss" scoped>
</style>