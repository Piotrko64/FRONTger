<script setup lang="ts">
import { ref } from "vue";
import { dataIconsHumor } from "./dataIconsHumor";
import OneHumor from "./OneHumor.vue";

type HumorType = "sad" | "happy" | "normal";

const chooseHumor = ref<HumorType>("sad");

function changeHumor(newHumor: HumorType) {
    chooseHumor.value = newHumor;
}
</script>
<template>
    <div class="flex">
        <OneHumor
            v-for="humor in dataIconsHumor"
            :icon="humor.icon"
            :name="humor.name"
            @changeHumor="changeHumor"
        />
    </div>
</template>
<style lang="scss">
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
