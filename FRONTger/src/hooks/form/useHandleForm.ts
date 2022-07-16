import { ref } from "vue";
import { DataObjInterface } from "../../@types/hooks/useHandleForm/DataObjInterface";
import { InputsData } from "../../@types/hooks/useHandleForm/InputsData";
import { ReturnArrayHook } from "../../@types/hooks/useHandleForm/ReturnArrayType";
import { isValidForm } from "../../components/utils/isValidForm";

export function useHandleForm(objData: DataObjInterface): ReturnArrayHook {
    const isLoading = ref(false);
    const isErrorInForm = ref(false);

    function sendRegisterForm() {
        isErrorInForm.value = false;
        if (!isValidForm(objData.email, objData.password)) {
            isErrorInForm.value = true;
            return;
        }
        isLoading.value = true;
    }

    function update(type: InputsData, value: string) {
        isErrorInForm.value = false;
        objData[type] = value;
    }
    return [sendRegisterForm, update, isErrorInForm, isLoading];
}
