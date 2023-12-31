import { createRouter, createWebHistory } from "vue-router";
import PageSearch from "@/views/page/PageSearch.vue";
import PageJoin from "@/views/page/PageJoin.vue";
import BoardList from "@/views/board/BoardList.vue";
import BoardUpdate from "@/views/board/BoardUpdate.vue";
import BoardWrite from "@/views/board/BoardWrite.vue";
import BoardDetail from "@/views/board/BoardDetail.vue";
import CommentForm from "@/views/comment/CommentForm";
import CommentList from "@/views/comment/CommentList";
import PageSearchList from "@/views/search/PageSearchList.vue";

const routes = [
  {
    path: "/",
    name: "PageSearch",
    component: PageSearch,
  },
  {
    path: "/page/login",
    name: "PageLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/PageLogin.vue"),
  },
  {
    path: "/board/list",
    name: "BoardList",
    component: BoardList,
  },
  {
    path: "/page/join",
    name: "PageJoin",
    component: PageJoin,
  },
  {
    path: "/board/:bno",
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
    path: "/comment/list",
    name: "CommentList",
    component: CommentList,
  },
  {
    path: "/comment/form",
    name: "CommentForm",
    component: CommentForm,
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
