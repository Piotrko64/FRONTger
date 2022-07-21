import { HumorType } from "./../form/Humor";
export interface StateMyProfile {
    nick: string;
    describe: string;
    humor: HumorType;
    profileImgUrl: string;
}
export interface StateAuth extends StateMyProfile {
    isAuth: boolean;
    token: string;
    errAuth: null | true;
}
