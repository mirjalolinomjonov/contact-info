import { createRouter, createWebHistory } from "vue-router";
import home from "@/pages/index.vue";

// lazy-loaded
const lazyLoaded = (name) => {
  return {
    path: `/${name}`,
    name: `${name}`,
    component: import(`@/pages/${name}.vue`),
  };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    lazyLoaded("create"),
    lazyLoaded("table"),
    lazyLoaded("about"),
    {
      path: "/create/:slug",
      name: "edit",
      component: () => import("@/pages/create.vue"),
    },
  ],
});

export default router;
