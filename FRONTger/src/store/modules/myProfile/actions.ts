import axios from "axios";

export const actionsMyProfile = {
    async logUser(context: any, dataToLog: { email: string; password: string }) {
        const { email, password } = dataToLog;
        await axios
            .post("http://localhost:4000/api/logUser", {
                email,
                password,
            })
            .then((data) => context.commit("setUser", data))
            .catch(() => context.commit("setErrorAuth", true));
        console.log(context);
    },
};
