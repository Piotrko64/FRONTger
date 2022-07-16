<script setup lang="ts">
import { useStore } from "vuex";
import { HumorType } from "../../../@types/form/Humor";
import { InputsData } from "../../../@types/hooks/useHandleForm/InputsData";
import TheHumors from "../../registerPage/componentsRegisterPage/humorComponents/TheHumors.vue";

const store = useStore();

function updateHumor(_type: InputsData, newHumor: HumorType) {
    store.commit("myProfileModule/changeDataProfile", { type: "humor", value: newHumor });
}
</script>
<template>
    <TheHumors @update-data="updateHumor" />
</template>
<style lang="scss"></style>
