<template>
    <div>
        <push-button label="Restart" font-size="xx-large"  @push-end="$router.push({name: ROUTE_COFFEE_BREW_METHOD})">
            <i class="fa fa-redo"/>
        </push-button>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import {ROUTE_COFFEE_BREW_METHOD} from "@/routes";

export default Vue.extend({
    name: "Result",
    data: () => ({ ROUTE_COFFEE_BREW_METHOD })
})
</script>

<style lang="scss" scoped>

</style>
