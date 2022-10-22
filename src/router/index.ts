import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "@/login/pages/login.component.vue";
import PageNotFound from "@/page-not-found/pages/page-not-found.component.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: LoginComponent,
        },
        {
            path: "/login",
            redirect: "/",
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/views/RegisterView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "page-not-found",
            component: PageNotFound,
        },               
        /* Companies routing */
        {
            path: "/company",
            name: "Company",
            component: () => import("@/views/CompanyView.vue"),
            children:[
                {
                    path: "home",
                    name: "HomeCompany",
                    component: () => import("@/companies/pages/home_company.vue"),
                },
                {
                    path: "messages",
                    name: "MessagesCompany",
                    component: () => import("@/companies/pages/messages_company.vue"),
                },
                {
                    path: "profile",
                    name: "ProfileCompany",
                    component: () => import("@/companies/pages/perfil_company.vue"),
                },
                {
                    path: "settings",
                    name: "SettingsCompany",
                    component: () => import("@/companies/pages/company_settings.vue"),
                },
            ],
        },
        /* Drivers routing */
        {
            path: "/driver",
            name: "Driver",
            component: () => import("@/views/DriverView.vue"),
            children: [
                {
                    path: "home",
                    name: "HomeDriver",
                    component: () => import("@/drivers/pages/home_driver.vue"),
                },
                {
                    path: "messages",
                    name: "MessagesDriver",
                    component: () => import("@/drivers/pages/messages_driver.vue"),
                },
                {
                    path: "settings",
                    name: "SettingsDriver",
                    component: () => import("@/drivers/pages/driver_settings.vue"),
                },
                {
                    path: "profile",
                    name: "ProfileDriver",
                    component: () => import("@/drivers/pages/perfil.vue"),
                },        
                {
                    path: "apply",
                    name: "Apply",
                    component: () => import("@/drivers/pages/apply_for_job.vue"),
                }
            ]
        },         
    ],
});
export default router;
