<script setup lang="ts">
import { useRoute } from "vue-router";
import { exampleFriends } from "../friendsPage/exampleFriends";
import ProfileLayout from "../profileComponents/ProfileLayout.vue";
import ImageProfile from "../../ui/profile/ImageProfile.vue";

const route = useRoute();
const idFriend = route.params.id;

const friend = exampleFriends.find((fr) => fr.id === idFriend);

const { imgProfileUrl, nick, describe, humor } = friend!;
</script>

<template>
    <ProfileLayout :nick="nick" :describe="describe">
        <template #leftCircle>
            <img src="" alt="" />
        </template>

        <template #pictureProfile>
            <ImageProfile :img="imgProfileUrl" :humor="humor" disabled />
        </template>

        <template #rightCircle> </template>

        <template #modals> </template>
    </ProfileLayout>
</template>

<style lang="scss" scoped></style>
