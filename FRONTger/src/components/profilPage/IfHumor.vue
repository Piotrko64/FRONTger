<script setup lang="ts">
import EmojiFrown from "../../assets/icons/humor/emoji-frown.svg";
import EmojiLaughing from "../../assets/icons/humor/emoji-laughing.svg";
import EmojiSmile from "../../assets/icons/humor/emoji-smile.svg";

const { humor } = defineProps<{ humor: string }>();
</script>
<template>
    <img v-if="humor === 'sad'" :src="EmojiFrown" alt="" />
    <img v-else-if="humor === 'happy'" :src="EmojiLaughing" alt="" />
    <img v-else="humor === 'normal'" :src="EmojiSmile" alt="" />
</template>
