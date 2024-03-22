import { createWebHistory, createRouter } from "vue-router";
import BirdLists from '../views/BirdLists.vue'
import BirdDescriptions from '../views/BirdDescriptions.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "BirdLists",
            component: BirdLists
        },
        {
            path: '/birdDesc/:id',
            name: "BirdDescriptions",
            component: BirdDescriptions,
            props: true,
            // props = false => $route.params.id;
            // props = true => props: [id]
        },
    ]
});
export default router;