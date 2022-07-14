<script setup lang="ts">
import FormRegister from "./componentsRegisterPage/FormRegister.vue";
import StartBackground from "../../ui/background/StartBackground.vue";
</script>
<template>
    <StartBackground />
    <div class="formRegister">
        <FormRegister />
    </div>
</template>
<style lang="scss" scoped>
.formRegister {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
