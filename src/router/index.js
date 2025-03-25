
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";  // ✅ Import Not Found Page

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: NotFound }, // ✅ Catch-all 404 Route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
