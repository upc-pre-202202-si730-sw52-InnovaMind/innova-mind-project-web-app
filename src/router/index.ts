import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import LoginComponent from "@/login/pages/login.component.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: LoginComponent,
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/views/RegisterView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import("@/views/AboutView.vue"),
        },
    ],
});
export default router;
