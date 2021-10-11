<template>
    <div class="h-100 is-flex flex-col">
        <div class="brand">COFFEE - TRON</div>
        <div style="position: relative;">
            <div class="crt is-flex">
                <div class="m-auto" v-html="result || text"/>
            </div>
            <div class="rally"/>
        </div>

        <div class="electric-panel">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import {routeToText} from "@/routes";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
    computed: {
      ...mapGetters(["result"]),
      text(): string {
          return routeToText(this.$route)
      }
    }
});
</script>

<style lang="scss">
body, html {
    height: 100%;
    background: url("assets/dark-wood-tex.jpg");
    box-shadow: inset 0px 0px 20px 0px black;
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
    border: 4px solid #ffe7bb;
    box-shadow: 0px 0px 20px 5px black inset;
}

.rally {
    width: 100%;
    position: absolute;
    left: 0;
    top: 40%;
    height: 60px;
    background: #ffe7bb;
    border-top: 10px solid #5d3800;
    border-bottom: 10px solid #5d3800;
}

.electric-panel {
    flex: 1;
    > div {
        display: inline-flex;
        flex-wrap: wrap;
        max-width: 500px;
        justify-content: center;
        width: 100%;
    }
    .push-button {
        margin: auto;
        &__shell {
            margin: 0.2rem;
        }
    }
}

.brand {
    text-align: center;
    color: #ffe7bb;
    font-size: x-large;
    font-family: 'Pacifico', monospace;
}
</style>
