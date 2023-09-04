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
  upComment: {
    cno: "",
    content: "",
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
  setUpComment(state, data) {
    state.upComment = data;
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

  async updateComment(context) {
    // 댓글 수정
    try {
      const res = await axios.post(
        "/api/comment/update",
        context.state.upComment
      );
      return res;
    } catch (e) {
      console.error("API 호출 실패", e);
      throw e;
    }
  },

  async deleteComment(context, cno) {
    // 댓글 삭제
    try {
      const res = await axios.post("/api/comment/delete", cno);
      return res;
    } catch (e) {
      console.error("API 호출 실패", e);
      throw e;
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
