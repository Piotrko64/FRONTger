<script setup lang="ts">
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import BaseInput from "../../ui/form/BaseInput.vue";
import BaseTextarea from "../../ui/form/BaseTextarea.vue";
import OrdinaryButton from "../../ui/otherButtons/OrdinaryButton.vue";

const emits = defineEmits(["close"]);

const store = useStore();

const nickGetter = store.getters["myProfileModule/dataProfile"].nick;
const describeGetter = store.getters["myProfileModule/dataProfile"].describe;

const isValid = ref<boolean>(true);
const editData = reactive({
    nick: nickGetter,
    describe: describeGetter,
});

function updateData(type: "nick" | "describe", newValue: string) {
    editData[type] = newValue;
}

function saveNewData() {
    if (editData.nick.trim().length < 1) {
        isValid.value = false;
        return;
    }
    isValid.value = true;
    store.commit("myProfileModule/changeDataProfile", { type: "nick", value: editData.nick });
    store.commit("myProfileModule/changeDataProfile", { type: "describe", value: editData.describe });
    emits("close");
}
</script>
<template>
    <h2>Edit yourself!</h2>
    <form @submit.prevent="saveNewData">
        <BaseInput
            RequiredInput
            name="nick"
            :minLength="1"
            :readyValue="nickGetter"
            @updateData="updateData"
        />
        <BaseTextarea
            name="describe"
            placeholder="This is optional!"
            :readyValue="describeGetter"
            @updateData="updateData"
        />
        <p v-if="!isValid">Something is wrong!</p>
        <OrdinaryButton text="Edit Profile" color="#3c57b6" @action="saveNewData" />
    </form>
</template>
<style lang="scss" scoped>
p {
    margin: 15px auto;
    margin: 0;
    color: red;
    font-size: 0.9rem;
    text-shadow: none;
}
</style>
