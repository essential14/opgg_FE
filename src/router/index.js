import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/views/PageHome.vue";
import PageJoin from "@/views/PageJoin.vue";
import BoardList from "@/views/board/BoardList.vue";
import BoardUpdate from "@/views/board/BoardUpdate.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import PageSearchDetail from "@/views/search/PageSearchDetail.vue";
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
  {
    path: "/board/:id",
    name: "BoardDetail",
    component: BoardDetail,
  },
  {
    path: "/board/update",
    name: "BoardUpdate",
    component: BoardUpdate,
  },
  {
    path: "/board/write",
    name: "BoardWrite",
    component: BoardWrite,
  },
  {
    path: "/search/detail",
    name: "PageSearchDetail",
    component: PageSearchDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
