import { createWebHistory, createRouter } from "vue-router"
import CreateComponent from "@/components/CreateComponent.vue"
import ListComponent from "@/components/ListComponent.vue"
import EditComponent from "@/components/EditComponent.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: CreateComponent
    },
    {
        path: "/view",
        name: "view",
        component: ListComponent
    },
    {
        path: "/edit:id",
        name: "edit",
        component: EditComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;