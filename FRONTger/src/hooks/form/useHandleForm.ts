import { ref } from "vue";

import { isValidForm } from "../../components/utils/isValidForm";

export function useHandleForm(objData: any) {
    const isLoading = ref(false);
    const isErrorInForm = ref(false);

    function sendRegisterForm() {
        isErrorInForm.value = false;
        if (!isValidForm(objData.email, objData.password)) {
            isErrorInForm.value = true;
            return;
        }
        isLoading.value = true;
        console.log(objData);
    }

    function update(type: string, value: string) {
        isErrorInForm.value = false;
        objData[type] = value;
    }
    return [sendRegisterForm, update, isErrorInForm, isLoading];
}
