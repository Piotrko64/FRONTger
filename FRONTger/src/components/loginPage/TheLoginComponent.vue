<script setup lang="ts">
import StartBackground from "../../ui/background/StartBackground.vue";
import FormLogin from "./componentsLoginPage/FormLogin.vue";
</script>

<template>
    <StartBackground />
    <div class="formLogin">
        <FormLogin />
    </div>
</template>

<style scoped lang="scss">
.formLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
