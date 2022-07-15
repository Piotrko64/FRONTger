<script setup lang="ts">
import TheLayout from "./ui/layout/TheLayout.vue";
</script>

<template>
    <TheLayout>
        <router-view></router-view>
    </TheLayout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
#app {
    font-family: "Lato";
    text-align: center;
    color: #2c3e50;
    font-size: 20px;
}
body {
    margin: 0;
}
</style>
