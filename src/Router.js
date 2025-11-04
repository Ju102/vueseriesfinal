import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import SerieComponent from "./components/SerieComponent.vue";
import PersonajesComponent from "./components/PersonajesComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import UpdateComponent from "./components/UpdateComponent.vue";


const routes = [
    { path: "/:n?", component: HomeComponent },
    { path: "/series/:id", component: SerieComponent },
    { path: "/personajes/:idserie", component: PersonajesComponent },
    { path: "/create", component: CreateComponent },
    { path: "/update", component: UpdateComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;