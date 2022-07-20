import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import FriendsPage from "./pages/FriendsPage.vue";
import ProfilPage from "./pages/ProfilePage.vue";
import HomePage from "./pages/HomePage.vue";
import FriendProfilePage from "./pages/FriendProfilePage.vue";
export const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: "/", redirect: "login" },
        { path: "/login", component: LoginPage },
        { path: "/register", component: RegisterPage },
        { path: "/home", component: HomePage },
        { path: "/friends", component: FriendsPage },
        { path: "/friendProfile/:id", component: FriendProfilePage },
        { path: "/profile", component: ProfilPage },
    ],
});
