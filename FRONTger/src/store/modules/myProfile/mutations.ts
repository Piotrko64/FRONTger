import { HumorType } from "./../../../@types/form/Humor";
import { StateMyProfile } from "./../../../@types/modules/MyProfile";
export const myProfileMutations = {
    changeDataProfile(state: StateMyProfile, payload: { type: keyof StateMyProfile; value: string }) {
        const { type, value } = payload;
        if (type === "humor") {
            state.humor = value as HumorType;
        } else {
            state[type] = value;
        }
    },
};
