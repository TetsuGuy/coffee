<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <coffee/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Coffee from './views/Coffee.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Coffee,
  },

  data: () => ({
    //
  }),
});
</script>
