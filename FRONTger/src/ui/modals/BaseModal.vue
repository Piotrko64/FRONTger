<script setup lang="ts">
const { open = false } = defineProps<{ open: boolean }>();
const emits = defineEmits(["close"]);
</script>
<template>
    <transition name="fade">
        <div class="entireModal" v-if="open" @click="emits('close')"></div>
    </transition>
    <transition name="pop"
        ><div class="modal" v-if="open" @click="emits('close')"><slot></slot></div
    ></transition>
</template>
<style lang="scss" scoped>
.entireModal {
    @import "../../assets/styles/flex.scss";
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    @include flex;

    transition: opacity 0.1s ease;
}
.modal {
    padding: 15px;
    background-color: rgb(46, 46, 61);
    width: clamp(240px, 20vw, 800px);
    color: white;
    font-family: "Lato", sans-serif;
    border-radius: 15px;
    position: absolute;
    z-index: 3;
    top: 25%;
}

.pop-enter-active,
.pop-leave-active {
    transition: all 0.3s cubic-bezier(0.5, 0, 0.5, 1);
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
    opacity: 1;
}
</style>
