<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseInput from "../../../ui/form/BaseInput.vue";
import BaseButton from "../../../ui/form/BaseButton.vue";
import { isValidForm } from "../../utils/isValidForm";
import SimpleLoading from "../../../ui/loading/simpleLoading.vue";
import IsAccountText from "../../../ui/form/IsAccountText.vue";

const isLoading = ref(false);
const isErrorInForm = ref(false);

const dataLogin: {
    email: string;
    password: string;
} = reactive({
    email: "",
    password: "",
});

function sendLoginForm() {
    isErrorInForm.value = false;
    if (!isValidForm(dataLogin.email, dataLogin.password)) {
        isErrorInForm.value = true;
        return;
    }
    isLoading.value = true;
    console.log(dataLogin);
}

function updateData(type: "email" | "password", value: string) {
    isErrorInForm.value = false;
    dataLogin[type] = value;
}
</script>

<template>
    <form @submit.prevent="sendLoginForm">
        <h1>LOGIN</h1>
        <BaseInput @updateData="updateData" name="email" :minLength="7" typeInput="email" RequiredInput />
        <BaseInput
            @updateData="updateData"
            typeInput="password"
            name="password"
            :minLength="5"
            RequiredInput
        />
        <p v-if="isErrorInForm">There are errors in the form</p>
        <SimpleLoading v-if="isLoading" />
        <BaseButton type="submit" text="Login" :disabled="isErrorInForm || isLoading" />
        <IsAccountText questionText="You do not have an account?" textToToggle="Sign up" route="/register" />
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

    p {
        margin: 0;
        color: red;
        font-size: 0.9rem;
        padding-bottom: 15px;
    }
}
</style>
