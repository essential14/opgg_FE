import { createRouter, createWebHistory } from "vue-router";
import PageSearch from "@/views/PageSearch.vue";
import PageJoin from "@/views/PageJoin.vue";
import BoardList from "@/views/board/BoardList.vue";
import BoardUpdate from "@/views/board/BoardUpdate.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import PageSearchList from "@/views/search/PageSearchList.vue";
const routes = [
  {
    path: "/",
    name: "PageSearch",
    component: PageSearch,
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
    path: "/search/list",
    name: "PageSearchList",
    component: PageSearchList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
