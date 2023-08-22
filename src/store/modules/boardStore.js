import axios from "axios";

const state = {
  lists: [],
  details: [],
};

const getters = {};

const mutations = {
  setLists(state, data) {
    state.lists = data;
  },
  setDetails(state, data) {
    state.details = data;
  },
};

const actions = {
  getBoardList(context) {
    axios
      .get("/api/board/list", context)
      .then((res) => {
        console.log("API 호출 성공", res.data);
        context.commit("setLists", res.data);
      })
      .catch((e) => {
        console.error("API 호출 실패", e);
      });
  },

  getDetail() {
    axios
      .post("/api/board/" + bno)
      .then((res) => {
        console.log("API 호출 성공", res.data);
        bno.commit("setDetails", res.data);
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
