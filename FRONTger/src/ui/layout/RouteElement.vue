<script setup lang="ts">
const { name, route, img } = defineProps<{ name: string; route: string; img: string }>();
</script>
<template>
    <router-link :to="route" active-class="active" class="nav-link">
        <div class="route">
            <img :src="img" :alt="name" />
            <div class="title">{{ name }}</div>
        </div>
    </router-link>
</template>
<style scoped lang="scss">
.nav-link {
    text-decoration: none;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
        background-color: rgba(255, 255, 255, 0.1);
    }
}
.route {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 40px;
    }
    .title {
        display: none;
        color: white;
        font-size: 1.75rem;
        padding-left: 15px;
        font-family: "Rum Raisin", sans-serif;
        @media (min-width: 1200px) {
            display: flex;
        }
    }
}
</style>
