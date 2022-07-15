<script setup lang="ts">
import BaseButton from "../../ui/form/BaseButton.vue";
import OrdinaryButton from "../../ui/otherButtons/OrdinaryButton.vue";
</script>

<template>
    <div class="profilePage">
        <div class="youAndOptions">
            <div class="circle small"></div>
            <div class="circle"></div>
            <div class="circle small"></div>
        </div>

        <h1>Nick</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores in temporibus, odit
            delectus ipsum vero perferendis sit provident per
        </p>
    </div>
</template>

<style lang="scss" scoped>
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
            background-color: aqua;
            border: 1px solid white;
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
                @media (min-width: 768px) {
                    height: 70px;
                }
            }
        }
    }
}
</style>
