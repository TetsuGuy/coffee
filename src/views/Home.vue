<template>
    <div style="width: 50%;padding: 2rem;">
        <span class="text-h1">Brewing</span>
      <v-radio-group v-model="column">
      <v-radio label="Filter" value="radio-1"/>
      <v-radio label="French Press" value="radio-2"/>
    </v-radio-group>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
     data: () => ({
      items: ["a", "b"]
    })
})
</script>
