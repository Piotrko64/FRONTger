<script setup lang="ts">
import BackgroundLogin from "./componentsLoginPage/BackgroundLogin.vue";
import FormLogin from "./componentsLoginPage/FormLogin.vue";
</script>

<template>
    <BackgroundLogin />
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
