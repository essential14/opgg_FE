import axios from "axios";

const state = {
  lists: [],
  comments: {
    bno: "",
    content: "",
    id: "",
    cno: "",
    depth: "",
    parent_cno: "",
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
  async writeComment(context, commentData) {
    try {
      const res = await axios.post("/api/comment/write", commentData);
      context.commit("setComments", res.data);
      return res; // 여기서 서버 응답 반환
    } catch (e) {
      console.error("API 호출 실패", e);
      throw e;
    }
  },

  getCommentList(context, bno) {
    axios
      .get("/api/comment/" + bno)
      .then((res) => {
        console.log("API 호출 성공", res.data);
        context.commit("setLists", res.data);
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
