import { createRouter, createWebHistory } from "vue-router";
import HomeCompany from "@/companies/pages/home_company.vue";
import AboutView from "@/views/AboutView.vue";
import LoginComponent from "@/login/pages/login.component.vue";
import HomeDriver from "@/drivers/pages/home_driver.vue";

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
            component: () => import("@/views/AboutView.vue"),
        },
        {
            path: "/driver",
            name: "driver",
            component: () => import("@/views/DriverView.vue"),
            children:[
                {
                    path: "home",
                    name: "home",
                    component: () => import("@/drivers/pages/home_driver.vue"),
                },
                {
                    path: "messages",
                    name: "messages",
                    component: () => import("@/drivers/pages/messages_driver.vue"),
                }
            ],
        },
        {
            path: "/home-driver",
            name: "home-driver",
            component: () => import("@/drivers/pages/home_driver.vue"),
        },
        {
            path: "/home-company",
            name: "home-company",
            component: () => import("@/companies/pages/home_company.vue"),
        },
    ],
});
export default router;
