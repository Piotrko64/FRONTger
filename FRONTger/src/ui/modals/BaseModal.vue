<script setup lang="ts">
const { open = false } = defineProps<{ open: boolean }>();
</script>
<template>
    <div class="entireModal" :class="{ open: open }">
        <Transition name="pop">
            <div class="modal" v-if="open">
                <slot></slot>
            </div>
        </Transition>
    </div>
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
    display: none;

    transition: opacity 0.3s ease;
    &.open {
        display: flex;
    }
    .modal {
        padding: 15px;
        background-color: rgb(46, 46, 61);
        width: clamp(240px, 20vw, 800px);
        color: white;
        font-family: "Lato", sans-serif;
        border-radius: 15px;
        position: relative;
        z-index: 3;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.pop-enter-active,
.pop-leave-active {
    transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
</style>
