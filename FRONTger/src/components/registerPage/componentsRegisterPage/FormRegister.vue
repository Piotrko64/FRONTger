<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseInput from "../../../ui/form/BaseInput.vue";

import SimpleLoading from "../../../ui/loading/simpleLoading.vue";
import BaseTextarea from "../../../ui/form/BaseTextarea.vue";
import BaseButton from "../../../ui/form/BaseButton.vue";
import IsAccountText from "../../../ui/form/IsAccountText.vue";
import TheHumors from "./humorComponents/TheHumors.vue";
import { HumorType } from "../../../@types/form/Humor";
import { isValidForm } from "../../utils/isValidForm";

const isLoading = ref(false);
const isErrorInForm = ref(false);

const dataRegister: {
    email: string;
    password: string;
    describe: string;
    nick: string;
    humor: HumorType | string;
} = reactive({
    email: "",
    password: "",
    describe: "",
    nick: "",
    humor: "normal",
});

function sendRegisterForm() {
    const { email, password } = dataRegister;
    if (!isValidForm(email, password)) {
        return;
    } else {
        alert("isGood");
    }
}

function updateData(type: "email" | "password" | "nick" | "describe" | "humor", value: string) {
    isErrorInForm.value = false;
    dataRegister[type] = value;
}
</script>

<template>
    <form @submit.prevent="sendRegisterForm">
        <h1>Register</h1>
        <BaseInput @updateData="updateData" name="nick" :minLength="0" typeInput="text" notRequiredInput />
        <BaseInput @updateData="updateData" name="email" :minLength="7" typeInput="email" />
        <BaseInput @updateData="updateData" typeInput="password" name="password" :minLength="5" />
        <TheHumors @updateData="updateData" />
        <BaseTextarea name="describe" @updateData="updateData" />
        <p v-if="isErrorInForm">There are errors in the form</p>
        <SimpleLoading v-if="isLoading" />

        <BaseButton type="submit" :disabled="isErrorInForm || isLoading" text="Register" />
        <IsAccountText questionText="Already have an account?" textToToggle="Sign in" route="/login" />
    </form>
</template>
<style lang="scss" scoped>
form {
    padding: 15px;
    background-color: rgb(46, 46, 61);
    width: clamp(260px, 25vw, 800px);
    color: white;
    font-family: "Lato", sans-serif;
    border-radius: 15px;
    p {
        margin: 0;
        color: red;
        font-size: 0.9rem;
        padding-bottom: 15px;
    }
}
</style>
