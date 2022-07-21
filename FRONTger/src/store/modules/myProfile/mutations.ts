import { HumorType } from "./../../../@types/form/Humor";
import { StateAuth, StateMyProfile } from "./../../../@types/modules/MyProfile";

interface PayloadUser {
    message: string;
    refreshToken: string;
    dataUser: {
        nick: string;
        describe: string;
        humor: HumorType;
    };
}

export const myProfileMutations = {
    changeDataProfile(state: StateMyProfile, payload: { type: keyof StateMyProfile; value: string }) {
        const { type, value } = payload;
        if (type === "humor") {
            state.humor = value as HumorType;
        } else {
            state[type] = value;
        }
    },

    setErrorAuth(state: StateAuth, payload: null | true) {
        state.errAuth = payload;
    },
    setUser(state: StateAuth, payload: PayloadUser) {
        state.isAuth = true;
        state.errAuth = null;
        state.token = payload.refreshToken;
        state.nick = payload.dataUser.nick;
        state.describe = payload.dataUser.describe;
        state.humor = payload.dataUser.humor;
        console.log(state);
    },
};
