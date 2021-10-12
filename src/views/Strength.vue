<template>
    <div>
        <push-button @push-start="setLoading(true)" @push-end="clickStrength(1)" label="Mild" fontSize="xx-large">
            <i class="far fa-smile"/>
        </push-button>
        <push-button @push-start="setLoading(true)" @push-end="clickStrength(2)" label="Normal" fontSize="xx-large">
            <i class="far fa-grin"/>
        </push-button>
        <push-button @push-start="setLoading(true)" @push-end="clickStrength(3)" label="Strong" fontSize="xx-large">
            <i class="far fa-grin-stars"/>
        </push-button>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import {ROUTE_COFFEE_AMOUNT} from "@/routes";
import {mapMutations} from "vuex";
export default Vue.extend({
    methods: {
        ...mapMutations(["setLoading", "setBrewStrength"]),
        clickStrength(strength: number) {
            this.setLoading(false)
            this.setBrewStrength(strength)
            this.$router.push({name: ROUTE_COFFEE_AMOUNT})
        }
    }
})
</script>
