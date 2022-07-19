<script setup lang="ts">
const { nick, describe } = defineProps<{
    nick: string;
    describe: string;
}>();
</script>

<template>
    <div class="profilePage">
        <div class="youAndOptions">
            <div class="circle small">
                <slot name="leftCircle"> </slot>
            </div>
            <slot name="pictureProfile"> </slot>
            <div class="circle small"><slot name="rightCircle"> </slot></div>
        </div>
        <slot name="modals"> </slot>

        <h1>{{ nick }}</h1>
        <p>
            {{ describe }}
        </p>
    </div>
</template>

<style lang="scss">
@import "../../assets/styles/flex.scss";
@import "../../assets/styles/font.scss";

.profilePage {
    @include flex();
    padding-top: 100px;
    flex-direction: column;
    color: white;
    text-shadow: 0px 0px 4px #000000;
    @media (min-width: 1200px) {
    }
    h1 {
        margin: 20px 0 0 0;
        font-family: "Rum Raisin", sans-serif;
        padding: 0 10px;
        word-break: break-all;
        @media (min-width: 1200px) {
            font-size: 4rem;
        }
    }
    p {
        text-align: justify;
        margin: 20px auto 0;
        font-size: 1.2rem;
        padding: 0 15px;
        @media (min-width: 1200px) {
            font-size: 1.4rem;
        }
    }
    .youAndOptions {
        @include flex();
        justify-content: space-evenly;
        flex-direction: row;
        width: 100vw;
        @media (min-width: 1200px) {
            max-width: 900px;
        }

        .circle {
            aspect-ratio: 1;
            border-radius: 50%;
            height: 100px;
            background-color: #2c3e50;
            border: 2px solid white;
            overflow: hidden;
            position: relative;

            @include flex();
            @media (min-width: 768px) {
                height: 150px;
                border: 2px solid white;
            }
            @media (min-width: 1200px) {
                height: 200px;
                border: 4px solid white;
            }
            &.small {
                height: 35px;
                cursor: pointer;
                img {
                    height: 20px;
                }
                @media (min-width: 768px) {
                    height: 70px;
                    img {
                        height: 35px;
                    }
                }
            }
        }
    }
}
</style>
