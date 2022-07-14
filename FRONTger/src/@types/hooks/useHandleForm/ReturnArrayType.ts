import { Ref } from "vue";
import { InputsData } from "./InputsData";

export type ReturnArrayHook = [
    () => void,
    (type: InputsData, value: string) => void,
    Ref<boolean>,
    Ref<boolean>
];
