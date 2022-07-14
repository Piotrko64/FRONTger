<script setup lang="ts">
const emits = defineEmits(["changeHumor"]);
const { icon, name, chooseHumor } = defineProps<{ icon: any; name: string; chooseHumor: string }>();
</script>
<template>
    <div class="oneHumor" :class="{ active: chooseHumor === name }" @click="emits('changeHumor', name)">
        <img :src="icon" alt="name" />
    </div>
</template>
<style lang="scss" scoped>
.oneHumor {
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    &.active {
        background-color: rgba(255, 255, 255, 0.1);
    }
    img {
        height: 50px;
        transition: all 0.2s ease;
    }
    &:hover img {
        transform: translateY(-10px);
    }
}
</style>
