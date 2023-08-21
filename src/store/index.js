import { createStore } from "vuex";
import user from "./modules/userStore";
import board from "./modules/boardStore";
import search from "./modules/searchStore";

export default createStore({
  modules: {
    user,
    board,
    search,
  },
});
