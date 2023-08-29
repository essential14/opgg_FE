import axios from "axios";

const state = {
  lists: [],
  comments: {
    bno: "",
    content: "",
    id: "",
  },
};

const getters = {};

const mutations = {
  setLists(state, data) {
    state.lists = data;
  },
  setComments(state, data) {
    state.comments = data;
  },
};

const actions = {
  writeComment(context, commentData) {
    console.log("API 호출 시작");
    axios
      .post("/api/comment/write", commentData)
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
