import { StateAuth, StateMyProfile } from "../../../@types/modules/MyProfile";

export const gettersMyProfile = {
    dataProfile(state: StateMyProfile) {
        return state;
    },
    isAuth(state: StateAuth) {
        return state.isAuth;
    },
};
