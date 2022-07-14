<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseInput from "../../../ui/form/BaseInput.vue";

import SimpleLoading from "../../../ui/loading/simpleLoading.vue";
import BaseTextarea from "../../../ui/form/BaseTextarea.vue";
import BaseButton from "../../../ui/form/BaseButton.vue";
import IsAccountText from "../../../ui/form/IsAccountText.vue";

const isLoading = ref(false);
const isErrorInForm = ref(false);

const dataLogin: {
    email: string;
    password: string;
    describe: string;
    nick: string;
} = reactive({
    email: "",
    password: "",
    describe: "",
    nick: "",
});

// function sendRegisterForm() {
//     isErrorInForm.value = false;
//     if (!isValidRegisterForm(dataLogin.email, dataLogin.password)) {
//         isErrorInForm.value = true;
//         return;
//     }
//     isLoading.value = true;
//     console.log(dataLogin);
// }

function updateData(type: "email" | "password" | "nick" | "describe", value: string) {
    isErrorInForm.value = false;
    // dataLogin[type] = value;
}
</script>

<template>
    <form @submit.prevent="">
        <h1>Register</h1>
        <BaseInput
            @updateData="updateData"
            name="nick (optional)"
            :minLength="0"
            typeInput="text"
            notRequiredInput
        />
        <BaseInput @updateData="updateData" name="email" :minLength="7" typeInput="email" />
        <BaseInput @updateData="updateData" typeInput="password" name="password" :minLength="5" />
        <BaseTextarea name="describe yourself!" />
        <p v-if="isErrorInForm">There are errors in the form</p>
        <SimpleLoading v-if="isLoading" />

        <BaseButton type="submit" :disabled="false" text="Register" />
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
