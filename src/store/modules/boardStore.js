import axios from "axios";

const state = {
  lists: [],
};

const getters = {};

const mutations = {
  setLists(state, data) {
    state.lists = data;
  },
};

const actions = {
  getBoardList() {
    axios
      .get("/api/board/list")
      .then((res) => {
        console.log("API 호출 성공", res.data);
      })
      .catch((e) => {
        console.error("API 호출 실패", e);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
