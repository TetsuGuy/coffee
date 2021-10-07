<template>
    <div style="padding: 0.5rem;">
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>

<style>
body, html {
  height: 100%;
  background: #110400;
}

.text-header {
    font-size: xxx-large;
    font-style: italic;
    color: #ffe67f;
}
</style>
