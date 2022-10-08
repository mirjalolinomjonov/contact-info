import { createRouter, createWebHistory } from "vue-router";
import home from "@/pages/index.vue";

// lazy-loaded
const lazyLoaded = (name) => {
  return {
    path: `/${name}`,
    name: `${name}`,
    component: import(`@/pages/${name}.vue`),
    meta: {
      requiresAuth: true,
    },
  };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: () => import("@/layouts/default.vue"),
      meta: { title: "Contact info" },
      children: [
        {
          path: "",
          name: "home",
          component: home,
          meta: {
            requiresAuth: true,
          },
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
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/layouts/auth.vue"),
      meta: { title: "Authentication" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/layouts/error.vue"),
      meta: { title: "Not found page" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requireAuth = !!(to.meta && to.meta.requiresAuth);
  const token = localStorage.getItem("token");

  document.title = `${to.meta.title}`;

  if (requireAuth && token) {
    if (to.name == "auth") {
      next({ name: "home" });
      return;
    }
    next();
    return;
  }

  if (token) {
    if (to.name == "auth") {
      alert("siz ro'yxatdan o'tgansiz");
      next({ name: "home" });
      return;
    }
  } else {
    if (to.name != "auth") {
      alert("siz ro'yxatdan o'tmagansiz! Iltimos ro'yxatdan o'ting");
      next({ name: "auth" });
      return;
    }
  }
  next();
});

export default router;
