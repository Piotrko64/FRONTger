<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseInput from "../../../ui/form/BaseInput.vue";
import BaseButton from "../../../ui/form/BaseButton.vue";
import { isValidLoginForm } from "./features/isValidLoginForm";

const isLogin = ref(false);

const dataLogin: {
    email: string;
    password: string;
} = reactive({
    email: "",
    password: "",
});

function sendLoginForm() {
    if (!isValidLoginForm(dataLogin.email, dataLogin.password)) {
        return;
    }
    console.log(dataLogin);
}

function updateData(type: "email" | "password", value: string) {
    dataLogin[type] = value;
}
</script>

<template>
    <form @submit.prevent="sendLoginForm">
        <h1>LOGIN</h1>
        <BaseInput @updateData="updateData" name="email" :minLength="7" />

        <BaseInput @updateData="updateData" typeInput="password" name="password" :minLength="5" />
        <p v-if="isLogin"></p>
        <BaseButton type="submit" text="Login" />
    </form>
</template>
<style lang="scss" scoped>
form {
    padding: 15px;
    background-color: rgb(46, 46, 61);
    width: 260px;
    color: white;
    font-family: "Lato", sans-serif;
    border-radius: 15px;
}
</style>
