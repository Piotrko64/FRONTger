<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

import logout from "../../assets/icons/myProfile/logout.svg";
import pen from "../../assets/icons/myProfile/pen.svg";
import IfHumor from "./IfHumor.vue";
import BaseModal from "../../ui/modals/BaseModal.vue";
import ModalHumor from "./modals/ModalHumor.vue";
import EditProfil from "./EditProfil.vue";
import { computed } from "@vue/reactivity";

const store = useStore();
const getter = computed(() => store.getters["myProfileModule/dataProfile"]);

const openModalHumor = ref(false);
const openEditModal = ref(false);
</script>

<template>
    <div class="profilePage">
        <div class="youAndOptions">
            <div class="circle small">
                <img :src="logout" alt="" />
            </div>
            <div class="relative">
                <div class="circle">
                    <img :src="getter.profileImgUrl" />
                </div>
                <div class="circle circleHumor">
                    <IfHumor :humor="getter.humor" @click="openModalHumor = true" />
                </div>
            </div>
            <div class="circle small" @click="openEditModal = true">
                <img :src="pen" />
            </div>
        </div>
        <BaseModal :open="openModalHumor" @close="openModalHumor = false">
            <ModalHumor @close="openModalHumor = false" />
        </BaseModal>
        <BaseModal :open="openEditModal" @close="openEditModal = false">
            <EditProfil @close="openEditModal = false" />
        </BaseModal>
        <h1>{{ getter.nick }}</h1>
        <p>
            {{ getter.describe }}
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
        .relative {
            position: relative;
            .circleHumor {
                position: absolute;
                bottom: 0;
                right: 0;
                height: 25%;
                cursor: pointer;
                border: none;
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
    }
}
</style>
