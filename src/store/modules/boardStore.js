import axios from "axios";

const state = {
  lists: [],
  details: {
    bno: "",
    board_date: "",
    content: "",
    fno: "",
    id: "",
    org_file: "",
    stored_file: "",
    title: "",
    viewcount: "",
  },
};

const getters = {
  getDetail: (state) => state.details,
};

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

  getBoardDetail(context, id) {
    axios
      .get("/api/board/" + id)
      .then((res) => {
        console.log("API 호출 성공", res.data);
        context.commit("setDetails", res.data);
        console.log("state.details" + state.details);
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
