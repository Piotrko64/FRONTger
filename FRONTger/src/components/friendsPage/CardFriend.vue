<script setup lang="ts">
import { ref, watch } from "vue";
import ImageProfile from "../../ui/profile/ImageProfile.vue";

const { img, nick, humor, searchText } = defineProps<{
    img: string;
    nick: string;
    searchText: string;
    humor: string;
}>();

const nickWithHighlight = ref<string>(setHighlightNick());

watch(
    () => nick,
    () => (nickWithHighlight.value = setHighlightNick())
);

function setHighlightNick() {
    const findIndex = nick.toLowerCase().indexOf(searchText.toLowerCase());
    if (findIndex === -1) return nick;
    const lengthSearchText = searchText.length;
    return `${findIndex} ,${nick.slice(0, findIndex)}<span>${nick.slice(
        findIndex,
        findIndex + lengthSearchText
    )}</span>${nick.slice(findIndex + lengthSearchText)}`;
}
</script>

<template>
    <div class="card">
        <ImageProfile thumbnail :img="img" :humor="humor" />
        <div class="about">
            <h3 v-html="nickWithHighlight"></h3>
            <p>aaa</p>
        </div>
    </div>
</template>
<style lang="scss">
@import "../../assets/styles/flex.scss";
@import "../../assets/styles/font.scss";
.card {
    @include flex;
    max-width: 370px;
    width: 100%;
    background-color: rgb(46, 46, 61);
    margin: 10px;
    color: white;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
    .about {
        @include flex;
        flex-direction: column;
        font-family: "Lato";
        align-items: flex-start;
        padding-left: 15px;
        h3 {
            margin: 0;
            text-align: left;
            word-break: break-all;
            span {
                background: rgb(255, 255, 255);
                background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0) 10%,
                    rgba(255, 255, 255, 0.3) 100%
                );
                box-decoration-break: clone;
                border-radius: 2px;
            }
        }
        p {
            font-size: 1rem;
            text-align: left;
            word-break: break-word;
            max-height: 120px;
            margin: 10px 0 0;
            overflow: hidden;
            @media (min-width: 992px) {
                font-size: 1.2rem;
            }
        }
    }
}
</style>
