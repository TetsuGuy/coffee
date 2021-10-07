<template>
   <img height="592" width="420" class="ghost-hand" src="@/assets/hand-point.png" :style="{paddingTop: offsetY}"/>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    name: "GhostHandVue",
    props: {
        offsetY: {
            type: String,
            default: "0px"
        }
    }
})
</script>

<style lang="scss" scoped>
@keyframes poke {
    0% {
        transform: translate(0);
    }
    50% {
        transform: translateY(50px);
    }
    100% {
        transform: translate(0);
    }
}
.ghost-hand {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    filter: opacity(0.5);
    animation: 3s poke infinite ease-in-out
}
</style>