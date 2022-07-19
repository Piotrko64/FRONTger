<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

import logout from "../../assets/icons/myProfile/logout.svg";
import pen from "../../assets/icons/myProfile/pen.svg";

import BaseModal from "../../ui/modals/BaseModal.vue";

import EditProfil from "./EditProfil.vue";
import { computed } from "@vue/reactivity";
import ImageProfile from "../../ui/profile/ImageProfile.vue";
import ProfileLayout from "../profileComponents/ProfileLayout.vue";

const store = useStore();
const getter = computed(() => store.getters["myProfileModule/dataProfile"]);

const openEditModal = ref(false);
</script>

<template>
    <ProfileLayout :nick="getter.nick" :describe="getter.describe">
        <template #leftCircle>
            <img :src="logout" alt="" />
        </template>

        <template #pictureProfile>
            <ImageProfile :img="getter.profileImgUrl" :humor="getter.humor" />
        </template>

        <template #rightCircle>
            <img :src="pen" alt="" @click="openEditModal = true" />
        </template>

        <template #modals>
            <BaseModal :open="openEditModal" @close="openEditModal = false">
                <EditProfil @close="openEditModal = false" />
            </BaseModal>
        </template>
    </ProfileLayout>
</template>

<style lang="scss" scoped></style>
