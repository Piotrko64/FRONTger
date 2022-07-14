<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "../../../ui/form/BaseInput.vue";
import BaseButton from "../../../ui/form/BaseButton.vue";
import SimpleLoading from "../../../ui/loading/simpleLoading.vue";
import IsAccountText from "../../../ui/form/IsAccountText.vue";
import { useHandleForm } from "../../../hooks/form/useHandleForm";

const dataLogin: {
    email: string;
    password: string;
} = reactive({
    email: "",
    password: "",
});
const [sendLoginForm, update, isErrorInForm, isLoading] = useHandleForm(dataLogin);
</script>

<template>
    <form @submit.prevent="sendLoginForm">
        <h1>LOGIN</h1>
        <BaseInput @updateData="update" name="email" :minLength="7" typeInput="email" RequiredInput />
        <BaseInput @updateData="update" typeInput="password" name="password" :minLength="5" RequiredInput />
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
