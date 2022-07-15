<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { dataNav } from "./dataNav";

import icon from "../../assets/icons/nav/frontgericon.png";
import RouteElement from "./RouteElement.vue";

const routePath = ref<string>("");
const route = useRoute();
const showNav = ref<boolean>(true);

watch([route], () => {
    showNav.value = false;
    routePath.value = route.fullPath;
    if (route.path === "/login" || route.path === "/register") {
        showNav.value = true;
    }
});
</script>
<template>
    <nav>
        <div class="logo" :class="{ showLogo: showNav }">
            <img :src="icon" alt="logo" />
        </div>
        <RouteElement
            v-for="route in dataNav"
            :img="route.img"
            :name="route.name"
            :route="route.route"
            v-if="!showNav"
        />
    </nav>
</template>
<style lang="scss" scoped>
@import "../../assets/styles/font.scss";
nav {
    height: 65px;
    background-color: rgb(46, 46, 61);
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    .logo {
        display: none;
        justify-content: center;
        flex: 1;
        &.showLogo {
            display: flex;
        }
        @media (min-width: 576px) {
            display: flex;
        }
        img {
            height: 55px;
        }
    }
}
</style>
