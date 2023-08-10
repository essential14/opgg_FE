import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/PageHome.vue";
import BoardList from "@/views/board/BoardList.vue";
import PageJoin from "@/views/PageJoin.vue";
const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },
  {
    path: "/login",
    name: "PageLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PageLogin.vue"),
  },
  {
    path: "/board/list",
    name: "BoardList",
    component: BoardList,
  },
  {
    path: "/join",
    name: "PageJoin",
    component: PageJoin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
