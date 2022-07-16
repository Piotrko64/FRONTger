<script setup lang="ts">
const { text, color } = defineProps<{
    text: string;
    color: string;
}>();

const emits = defineEmits(["action"]);
</script>

<template>
    <button :style="{ backgroundColor: color }" @click="emits('action')">
        {{ text }}
    </button>
</template>

<style scoped lang="scss">
@import "../../assets/styles/font.scss";
button {
    font-size: 1.2rem;
    font-family: "Lato";
    border: none;
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (min-width: 992px) {
        font-size: 1.4rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.6rem;
    }
}
</style>
