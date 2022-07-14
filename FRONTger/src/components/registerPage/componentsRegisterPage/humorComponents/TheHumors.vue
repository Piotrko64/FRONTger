<script setup lang="ts">
import { ref } from "vue";
import { dataIconsHumor } from "./dataIconsHumor";
import OneHumor from "./OneHumor.vue";
import { HumorType } from "../../../../@types/form/Humor";

const emits = defineEmits(["updateData"]);

const chooseHumor = ref<HumorType>("normal");

function changeHumor(newHumor: HumorType) {
    chooseHumor.value = newHumor;
    emits("updateData", "humor", chooseHumor);
    console.log("updateData", "humor", chooseHumor);
}
</script>
<template>
    <h2>Choose your today humor!</h2>
    <div class="flex">
        <OneHumor
            v-for="humor in dataIconsHumor"
            :icon="humor.icon"
            :name="humor.name"
            :chooseHumor="chooseHumor"
            @changeHumor="changeHumor"
        />
    </div>
</template>
<style lang="scss">
h2 {
    font-size: 1.2rem;
}
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
}
</style>
