<script setup lang="ts">
import ImageProfile from "../../ui/profile/ImageProfile.vue";

const { img, nick, humor, describe } = defineProps<{
    img: string;
    nick: string;
    describe: string;
    humor: string;
}>();
</script>

<template>
    <div class="card">
        <ImageProfile thumbnail :img="img" :humor="humor" />
        <div class="about">
            <h3>{{ nick }}</h3>
            <p>{{ describe }}</p>
        </div>
    </div>
</template>
<style lang="scss">
@import "../../assets/styles/flex.scss";
@import "../../assets/styles/font.scss";
.card {
    @include flex;
    width: 350px;
    background-color: rgb(46, 46, 61);
    margin: 10px;
    color: white;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
    .about {
        @include flex;
        flex-direction: column;
        font-family: "Lato";
        align-items: flex-start;
        padding-left: 25px;
        h3 {
            margin: 0;
            text-align: left;
        }
        p {
            font-size: 1rem;
            text-align: left;
            word-break: break-word;
            max-height: 120px;

            overflow: hidden;
        }
    }
}
</style>
