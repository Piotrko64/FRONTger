import { router } from "./../../router";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { DataObjInterface } from "../../@types/hooks/useHandleForm/DataObjInterface";
import { InputsData } from "../../@types/hooks/useHandleForm/InputsData";
import { ReturnArrayHook } from "../../@types/hooks/useHandleForm/ReturnArrayType";
import { isValidForm } from "../../components/utils/isValidForm";

export function useHandleForm(objData: DataObjInterface): ReturnArrayHook {
    const store = useStore();

    const isLoading = ref(false);
    const isErrorInForm = ref(false);

    async function sendForm() {
        const { email, password } = objData;
        isErrorInForm.value = false;
        if (!isValidForm(email, password)) {
            isErrorInForm.value = true;
            return;
        }
        isLoading.value = true;

        store.dispatch("myProfileModule/logUser", { email, password });
    }

    function update(type: InputsData, value: string) {
        isErrorInForm.value = false;
        objData[type] = value;
    }

    // Auth router
    const isAuthComputed = computed(() => store.getters["myProfileModule/isAuth"]);
    watch(isAuthComputed, () => {
        console.log("ee", isAuthComputed);
        router.replace("/home");
    });

    return [sendForm, update, isErrorInForm, isLoading];
}
