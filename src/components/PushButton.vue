<template>
    <div>
        <div :style="{width: size, height: size}" class="push-button__shell is-round">
            <div ref="button"
                 @click="handleClick"
                 class="push-button is-round h-100"
                 :style="style"
            >
                <div class="push-button__inner is-flex is-round h-100">
                    <span v-if="text" class="push-button__text m-auto">{{text}}</span>
                    <slot/>
                    <ghost-hand v-if="hasGhostHand" offsetY="50px" />
                    <audio ref="player" src="@/assets/switch.wav"/>
                </div>
            </div>
        </div>
        <div v-if="label" class="push-button__text-label">
            {{ label }}
        </div>
    </div>
</template>

<script lang="ts">
import tinycolor from "tinycolor2"
import Vue from "vue"
import GhostHand from "../components/GhostHand.vue"
const BoxShadowSize = "0px 3px 0px 0px"
const ButtonPushStateClassName = "push-button--down"

export default Vue.extend({
    components: {
        GhostHand
    },
    props: {
        text: {
            type: String,
            default: undefined
        },
        label: {
            type: String,
            default: undefined
        },
        delay: {
            type: Number,
            default: 500
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
            default: "large"
        },
        hasGhostHand: {
            type: Boolean,
            default: false
        },
        textInside: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        colorDarker(): string {
            return tinycolor(this.color).darken(40).toHexString()
        },
        boxShadow(): string {
            return `${BoxShadowSize} ${this.colorDarker}`
        },
        style(): Partial<CSSStyleDeclaration> {
            return {
                background: this.color,
                boxShadow: this.boxShadow,
                fontSize: this.fontSize
            }
        }
    },
    methods: {
        async handleClick() {
            this.playSound()
            const btn = this.$refs.button as HTMLDivElement
            btn.classList.add(ButtonPushStateClassName)
            btn.style.boxShadow = `inset ${this.boxShadow}`
            this.$emit("push-start")
            await this.emitClick()
        },
        emitClick() {
            setTimeout(() => {
                const btn = this.$refs.button as HTMLDivElement
                btn.classList.remove(ButtonPushStateClassName)
                btn.style.boxShadow = this.boxShadow
                setTimeout(() => {
                    this.$emit("push-end")
                }, this.delay)
            }, this.delay)
        },
        playSound() {
            const player = this.$refs.player as HTMLAudioElement

            player.play()
        }
    }
})
</script>


<style lang="scss" scoped>
.push-button__text-label {
    background: black;
    color: white;
    text-align: center;
    margin: 0 0.25rem;
    height: 25px;
}
.push-button__shell {
    background: url("~@/assets/metal.jpg");
    border: 2px solid #d7d7d7;
    padding: 0.5rem;
}
.push-button {
    filter: drop-shadow(4px -1px 4px black);
    &--down {
        filter: none;
        .push-button__text {
            padding-top: 5px;
        }
    }
    &__text {
        font-family: monospace;
        font-style: normal;
    }
    &__inner > * {
        margin: auto;
    }
}
</style>
