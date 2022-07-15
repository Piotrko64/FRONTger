import { myProfileModule } from "./modules/myProfile/index";
import { createStore } from "vuex";

export const store = createStore({
    modules: {
        myProfileModule,
    },
});
