<script setup lang="ts">
const { text, type = "button" } = defineProps<{
    text: string;
    type: "button" | "submit";
}>();
</script>

<template>
    <button :type="type">
        <div class="text">
            {{ text }}
        </div>
    </button>
</template>

<style scoped lang="scss">
button {
    font-size: 1.2rem;
    background-color: rgb(39, 138, 44);
    border: none;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
        position: relative;
        z-index: 3;
    }
    &::after {
        content: "";
        position: absolute;
        border-radius: 5px;
        transform-origin: left;
        width: 0%;
        height: 100%;
        color: red;
        z-index: 2;
        background-color: rgb(63, 170, 31);
        transition: all 0.3s ease;
    }
    &:hover {
        &::after {
            width: 100%;
        }
        cursor: pointer;
    }
}
</style>
