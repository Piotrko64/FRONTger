import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
export const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: "/", redirect: "login" },
        { path: "/login", component: LoginPage },
        { path: "/register", component: RegisterPage },
        { path: "/home", component: RegisterPage },
        { path: "/profile", component: RegisterPage },
    ],
});
