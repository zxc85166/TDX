import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Weeekly" } },
  // component: () => import('./views/Soojin.vue')
  // {
  //   path: "/zoa",
  //   meta: { title: "Zoa" },
  //   component: Zoa,
  // },
  { path: "/:path(.*)", component: NotFound },
];
