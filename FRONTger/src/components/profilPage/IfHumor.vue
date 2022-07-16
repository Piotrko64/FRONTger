<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import EmojiFrown from "../../assets/icons/humor/emoji-frown.svg";
import EmojiLaughing from "../../assets/icons/humor/emoji-laughing.svg";
import EmojiSmile from "../../assets/icons/humor/emoji-smile.svg";

const store = useStore();
const humor = computed(() => store.getters["myProfileModule/dataProfile"].humor);
</script>
<template>
    <img v-if="humor === 'sad'" :src="EmojiFrown" alt="" />
    <img v-else-if="humor === 'happy'" :src="EmojiLaughing" alt="" />
    <img v-else="humor === 'normal'" :src="EmojiSmile" alt="" />
</template>
