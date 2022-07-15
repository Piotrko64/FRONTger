import { gettersMyProfile } from "./getters";
import { myProfileMutations } from "./mutations";

export const myProfileModule = {
    namespaced: true,
    state() {
        return {
            nick: "Piotr",
            describe: "lorem Plorem Piotrlorem Piotrlorem Piotrlorem Piotriotr",
            humor: "normal",
            profileImgUrl: "",
        };
    },
    mutations: myProfileMutations,
    getters: gettersMyProfile,
};
