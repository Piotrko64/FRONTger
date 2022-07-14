import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "login" },
        { path: "/login", component: LoginPage },
    ],
});
