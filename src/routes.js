import Home from "@/views/Home.vue";
import Soojin from "@/views/Soojin.vue";
import Jiyoon from "@/views/Jiyoon.vue";
import Monday from "@/views/Monday.vue";
import Soeun from "@/views/Soeun.vue";
import Jaehee from "@/views/Jaehee.vue";
import Jihan from "@/views/Jihan.vue";
import Zoa from "@/views/Zoa.vue";
import NotFound from "@/views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Weeekly" } },
  // component: () => import('./views/Soojin.vue')
  {
    path: "/soojin",
    meta: { title: "Soojin" },
    component: Soojin,
  },
  {
    path: "/jiyoon",
    meta: { title: "Jiyoon" },
    component: Jiyoon,
  },
  {
    path: "/monday",
    meta: { title: "Monday" },
    component: Monday,
  },
  {
    path: "/soeun",
    meta: { title: "Soeun" },
    component: Soeun,
  },
  {
    path: "/jaehee",
    meta: { title: "Jaehee" },
    component: Jaehee,
  },
  {
    path: "/jihan",
    meta: { title: "Jihan" },
    component: Jihan,
  },
  {
    path: "/zoa",
    meta: { title: "Zoa" },
    component: Zoa,
  },
  { path: "/:path(.*)", component: NotFound },
];
