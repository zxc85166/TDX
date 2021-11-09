import Home from "@/views/Home.vue";
import Event from "@/views/Event.vue";
import NotFound from "@/views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Weeekly" } },
  // component: () => import('./views/Soojin.vue')
  {
    path: "/Event",
    meta: { title: "Event" },
    component: Event,
  },
  { path: "/:path(.*)", component: NotFound },
];
