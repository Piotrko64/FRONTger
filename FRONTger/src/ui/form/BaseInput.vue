<script setup lang="ts">
import { Ref, ref, watch } from "vue";

const {
    RequiredInput,
    typeInput = "text",
    name,
    minLength,
    readyValue = "",
} = defineProps<{
    RequiredInput?: boolean;
    typeInput?: string;
    name: string;
    minLength: number;
    readyValue?: string;
}>();

const emits = defineEmits(["updateData"]);

const errorInputMesage: Ref<string> = ref("");
const isBlur: Ref<boolean> = ref(false);
const valueInput: Ref<string> = ref(readyValue || "");
const isValid: Ref<boolean> = ref(true);

watch([isBlur], () => {
    isValid.value = false;
    if (RequiredInput && valueInput.value.trim() === "") {
        errorInputMesage.value = "This Input is required!";
    } else if (valueInput.value.length < minLength) {
        errorInputMesage.value = `The minimum length is ${minLength}`;
    } else if (typeInput === "email" && !valueInput.value.includes("@")) {
        errorInputMesage.value = `Wrong Email!`;
    } else {
        isValid.value = true;
    }
});
</script>

<template>
    <div class="flexInput">
        <label :for="name">{{ name }}</label>
        <input
            @input="emits('updateData', name, valueInput)"
            :type="typeInput"
            v-model="valueInput"
            :id="name"
            @blur="isBlur = true"
            @focus="isBlur = false"
            :placeholder="RequiredInput ? '' : 'Optional'"
            maxlength="50"
        />
        <p v-if="!isValid && isBlur">{{ errorInputMesage }}</p>
    </div>
</template>

<style scoped lang="scss">
.flexInput {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    label {
        margin-bottom: 5px;
        font-size: 1rem;
    }
    input {
        background-color: rgba(255, 255, 255, 0.103);
        border: 1px solid transparent;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        color: white;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        box-sizing: border-box;
        font-family: "Lato";
        font-weight: 400;
        width: 100%;
        &:focus-visible {
            border: 1px solid rgb(255, 255, 255);
        }
    }
    p {
        margin: 0;
        color: red;
        font-size: 0.9rem;
    }
}
</style>
