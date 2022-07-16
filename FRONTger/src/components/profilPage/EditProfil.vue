<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import BaseInput from "../../ui/form/BaseInput.vue";
import BaseTextarea from "../../ui/form/BaseTextarea.vue";

const store = useStore();

const nickGetter = computed(() => store.getters["myProfileModule/dataProfile"].nick);
const describeGetter = computed(() => store.getters["myProfileModule/dataProfile"].describe);
</script>
<template>
    <BaseInput RequiredInput name="nick" :minLength="1" :readyValue="nickGetter" />
    <BaseTextarea name="describe" placeholder="This is optional!" :readyValue="describeGetter" />
</template>
<style lang="scss"></style>
