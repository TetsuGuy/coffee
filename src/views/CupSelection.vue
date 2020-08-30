<template>
    <div>
        <h1 style="font-size: xxx-large;font-style: italic;color: #ffe67f;">How many cups?</h1>
        <div class="button-panel">
            <push-button color="#ffe75d" text="1"/>
            <push-button color="#ffe75d" text="2"/>
            <push-button color="#ffe75d" text="3"/>
            <push-button color="#ffe75d" text="4"/>
            <push-button color="#ffe75d" text="5"/>
            <push-button color="#ffe75d" text="6"/>
            <push-button color="#ffe75d" text="7"/>
            <push-button color="#ffe75d" text="8"/>
            <push-button color="#ffe75d" text="9"/>
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
.button-panel {
    display: inline-flex;
    flex-wrap: wrap; 
    width: 500px;
    .push-button__shell {
        margin: 1rem;
    }
}
</style>