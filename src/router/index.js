import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../components/Home.vue") },
  { path: "/products", component: () => import("../components/Products.vue") },
  { path: "/about", component: () => import("../components/About.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
