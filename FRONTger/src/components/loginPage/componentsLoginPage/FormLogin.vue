<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../../../ui/form/BaseInput.vue";
import BaseButton from "../../../ui/form/BaseButton.vue";

const email = ref("");
const password = ref("");
const isValidForm = ref(false);

function sendLoginForm() {
    if (!isValidForm) {
        console.log("bad");
        return;
    }
    console.log("a");
}

function updateEmail(value: string) {
    email.value = value;
}

function updatePassword(value: string) {
    password.value = value;
}
</script>

<template>
    <form @submit.prevent="sendLoginForm">
        <h1>LOGIN</h1>
        <BaseInput @updateInput="updateEmail" typeInput="email" name="Email" :minLength="7" />

        <BaseInput @updateInput="updatePassword" typeInput="password" name="Password" :minLength="5" />
        <BaseButton type="submit" text="Login" />
    </form>
</template>
<style lang="scss" scoped>
form {
    padding: 15px;
    background-color: rgb(46, 46, 61);
    width: min-content;
    color: white;
    font-family: "Lato", sans-serif;
    border-radius: 15px;
}
</style>
