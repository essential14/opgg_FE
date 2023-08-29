import { createStore } from "vuex";
import user from "./modules/userStore";
import board from "./modules/boardStore";
import search from "./modules/searchStore";
import comment from "./modules/commentStore";

export default createStore({
  modules: {
    user,
    board,
    search,
    comment,
  },
});
