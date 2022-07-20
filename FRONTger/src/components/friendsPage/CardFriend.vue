<script setup lang="ts">
import ImageProfile from "../../ui/profile/ImageProfile.vue";
import { useCardFriend } from "./hooks/useCardFriend";
import ThreeDotsModal from "./ThreeDotsModal.vue";

const props = defineProps<{
    img: string;
    nick: string;
    searchText: string;
    humor: string;
    id: string;
    describe: string;
}>();

const [id, img, humor, describe, searchText, nickWithHighlight, routeTo, openModal, toggleModal] =
    useCardFriend(props.id, props.img, props.humor, props.nick, props.searchText, props.describe);
</script>

<template>
    <div class="card" @click="routeTo(id)">
        <ImageProfile thumbnail :img="img" :humor="humor" />
        <div class="about">
            <h3 v-html="nickWithHighlight"></h3>
            <p>aaa</p>
        </div>
        <div class="threeDot" @click.stop="toggleModal(true)">
            <div v-for="dot in 3" class="dot" :key="dot"></div>
        </div>
        <ThreeDotsModal v-if="openModal" @closeModal="toggleModal(false)" :open="openModal" />
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
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

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
    .threeDot {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin-left: auto;

        &:hover .dot {
            margin-bottom: 6px;
        }
        .dot {
            transition: all 0.3s ease;
            width: 6px;
            aspect-ratio: 1;
            background-color: white;
            border-radius: 50%;
            margin-bottom: 3px;
        }
    }
}
</style>
