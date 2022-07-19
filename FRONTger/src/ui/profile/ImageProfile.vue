<script setup lang="ts">
import { ref } from "vue";
import IfHumor from "../../components/profilPage/IfHumor.vue";
import BaseModal from "../modals/BaseModal.vue";
import ModalHumor from "../../components/profilPage/modals/ModalHumor.vue";

const openModalHumor = ref(false);

const { img, humor, thumbnail, disabled } = defineProps<{
    img: string;
    humor: string;
    thumbnail?: boolean;
    disabled?: boolean;
}>();

function openModalHumorFn() {
    if (disabled) {
        return;
    }

    openModalHumor.value = true;
}
</script>

<template>
    <div class="relative" :class="{ thumbnail: thumbnail }">
        <div class="circle">
            <img :src="img" alt="" />
        </div>
        <div class="circleHumor" :class="{ disabled: disabled || thumbnail }">
            <IfHumor :humor="humor" @click="openModalHumorFn" />
        </div>
    </div>
    <BaseModal :open="openModalHumor" @close="openModalHumor = false">
        <ModalHumor @close="openModalHumor = false" />
    </BaseModal>
</template>

<style lang="scss">
@import "../../assets/styles/flex.scss";

.relative {
    position: relative;
    width: min-content;
    &.thumbnail {
        .circle {
            height: 75px;
            border: 3px solid white;
            img {
                border: 50%;
                aspect-ratio: 1;
            }
        }
        .circleHumor {
            height: 35%;
        }
    }
    .circleHumor {
        position: absolute;
        aspect-ratio: 1;
        border-radius: 50%;
        bottom: 0;
        right: 0;
        height: 25%;
        overflow: hidden;
        border: none;
        cursor: pointer;
        border: none;
        display: flex;
        &.disabled {
            cursor: default;
        }
        img {
            object-fit: cover;
            width: 100%;
            background-color: #2c3e50;
        }
    }
}

.circle {
    aspect-ratio: 1;
    border-radius: 50%;
    height: 100px;
    background-color: #2c3e50;
    border: 2px solid white;
    overflow: hidden;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
    }
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
            object-fit: contain;
            object-position: center;
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
</style>
