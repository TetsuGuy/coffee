<template>
    <div class="h-100 is-flex flex-col">
        <div class="brand has-text-centered">COFFEE - TRON</div>
        <div class="position-relative">
            <div class="crt is-flex">
                <div class="m-auto" v-html="loadingTxt || text || result"/>
            </div>
            <div class="rally w-100 position-absolute"/>
        </div>

        <div class="electric-panel flex-1">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import {getTextFromRoute} from "@/routes";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
    computed: {
        ...mapGetters(["result", "loading"]),
        text(): string {
          return getTextFromRoute(this.$route)
        },
        loadingTxt(): string {
            return this.$store.state.loading ? "Processing..." : ""
        }
    }
});
</script>

<style lang="scss">
@import "style/vars";
body, html {
    height: 100%;
    background: url("assets/dark-wood-tex.jpg");
    box-shadow: inset 0 0 20px 0 black;
}

.crt {
    z-index: 1;
    margin: 1rem;
    padding: 1rem;
    border-radius: 15px;
    font-size: xx-large;
    height: 33vh;
    background: #012701;
    color: #0fe00f;
    border: 4px solid $color-creme;
    box-shadow: 0 0 20px 5px black inset;
}

.rally {
    left: 0;
    top: 40%;
    height: 60px;
    background: $color-creme;
    border-top: 10px solid $color-creme--dark;
    border-bottom: 10px solid $color-creme--dark;
}

.electric-panel {
    > div {
        display: inline-flex;
        flex-wrap: wrap;
        max-width: 500px;
        justify-content: center;
        width: 100%;
    }
    .push-button {
        &__shell {
            margin: 0.5rem;
        }
        margin: auto;
    }
}

.brand {
    color: $color-creme;
    font-size: x-large;
    font-family: 'Pacifico', monospace;
}
</style>
