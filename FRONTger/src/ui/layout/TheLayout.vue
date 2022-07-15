<script setup lang="ts">
import BaseNav from "./BaseNav.vue";
import StartBackground from "../../ui/background/StartBackground.vue";
</script>
<template>
    <div>
        <StartBackground />
        <BaseNav />

        <slot></slot>
    </div>
</template>
<style lang="scss"></style>
