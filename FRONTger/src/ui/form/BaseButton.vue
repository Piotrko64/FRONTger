<script setup lang="ts">
const { text, type = "button" } = defineProps<{
    text: string;
    type: "button" | "submit";
}>();
</script>

<template>
    <button :type="type">
        {{ text }}
    </button>
</template>

<style scoped lang="scss">
button {
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.103);
    border: none;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
}
</style>
