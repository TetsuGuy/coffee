<template>
<div class="push-button__shell" :style="{ height: sizeShell, width: sizeShell }">
    <div ref="button" 
        @click="handleClick" 
        class="push-button" 
        :style="{height: size, width: size, background: color, boxShadow: '0px 10px 0px 0px '+this.colorDarker, left: 'calc(50% - 50px)',  top: 'calc(50% - 57px)' }"
    >
        <span class="push-button__text" :style="{fontSize: fontSize}" >{{text}}</span>
        <slot/>
        <ghost-hand v-if="hasGhostHand" offsetY="50px" />
    </div>
</div>
    
</template>

<script lang="ts">
import tinycolor from "tinycolor2"
import Vue from "vue"
import GhostHand from "../components/GhostHand.vue"

export default Vue.extend({
    components: {
        GhostHand
    },
    props: {
        text: {
            type: String,
            default: undefined
        },
        delay: {
            type: Number,
            default: 1000
        },
        color: {
            type: String,
            default: "white"
        },
        size: {
            type: String,
            default: "100px"
        },
        fontSize: {
            type: String,
            default: "xxx-large"
        },
        hasGhostHand: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        colorDarker(): string {
            return tinycolor(this.color).darken(30).toHexString()
        },
        sizeShell(): string {
            return `calc(1.3*${this.size})`
        }
    },
    methods: {
        async handleClick() {
            const btn = this.$refs.button as HTMLDivElement
            btn.style.marginTop = "5px"
            btn.style.boxShadow = `inset 0px 10px 0px 0px ${this.colorDarker}`
            btn.style.filter = "none"
            const child = btn.firstElementChild as HTMLElement
            child.style.paddingTop = "5px"

            await this.emitClick()
        },
        emitClick() {
            setTimeout(() => {
                const btn = this.$refs.button as HTMLDivElement
                btn.style.marginTop = "0px"
                btn.style.boxShadow = `0px 10px 0px 0px ${this.colorDarker}`
                btn.style.filter = "drop-shadow(4px -1px 4px black)"
                const child = btn.firstElementChild as HTMLElement
                child.style.paddingTop = "initial"

                this.$emit("click")
            }, this.delay)
        }
    }
})
</script>


<style lang="scss" scoped>
.push-button__shell {
    position: relative;
    background: url("~@/assets/metal.jpg");
    border: 2px solid grey;
    border-radius: 50%;
}

.push-button__text {
    transform: scaleY(1.2);
    margin-top: 6px;
}

.push-button {
    position: absolute;
    transform: scaleY(0.9);
    display: flex;
    border: 1px solid #5b5b5b;
    border-radius: 50%;
    box-shadow: 0px 10px 0px 0px #5b5b5b;
    filter: drop-shadow(4px -1px 4px black);
    &>* {
        margin: auto;
        font-weight: bold;
    }
}
</style>
