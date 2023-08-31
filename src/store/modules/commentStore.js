import axios from "axios";

const state = {
  lists: [],
  replyData: {
    bno: "",
    content: "",
    id: "",
    cno: "",
    depth: "",
    group_cno: "",
  },
};

const getters = {};

const mutations = {
  setLists(state, data) {
    state.lists = data;
  },
  setReply(state, data) {
    state.replyData = data;
  },
};

const actions = {
  async writeComment(context, commentData) {
    // 댓글 작성
    try {
      const res = await axios.post("/api/comment/write", commentData);
      context.commit("setComments", res.data);
      return res;
    } catch (e) {
      console.error("API 호출 실패", e);
      throw e;
    }
  },

  getCommentList(context, bno) {
    // 댓글 조회
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
