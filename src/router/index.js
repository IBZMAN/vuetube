import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tv",
    name: "tv-show",
    component: () => import("../views/TVShowView.vue"),
  },
  {
    path: "/",
    name: "whos-watching",
    component: () => import("../views/WhosWatching.vue"),
  },
  {
    path: "/home",
    name: "home-view",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
