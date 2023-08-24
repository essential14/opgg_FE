import axios from "axios";

const state = {
  lists: [],
  details: {
    bno: "",
    created_date: "",
    updated_date: "",
    content: "",
    fno: "",
    id: "",
    org_file: "",
    stored_file: "",
    title: "",
    viewcount: "",
  },
  posts: {
    title: "",
    content: "",
    org_file: [],
  },
};

const getters = {
  getDetail: (state) => state.details,
  getPost: (state) => state.posts,
};

const mutations = {
  setLists(state, data) {
    state.lists = data;
  },
  setDetails(state, data) {
    state.details = data;
  },
  setPosts(state, data) {
    state.posts = data;
  },
};

const actions = {
  writePost(context) {
    const formData = new FormData();

    formData.append("id", context.rootState.user.login.loginId);
    formData.append("title", context.state.posts.title);
    formData.append("content", context.state.posts.content);

    for (let i = 0; i < context.state.posts.org_file.length; i++) {
      formData.append("uploadfiles", context.state.posts.org_file[i]);
    }
    axios
      .post("/api/board/write", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        context.commit("setPosts", res.data);
      })
      .catch((e) => {
        console.error("API 호출 실패", e);
      });
  },

  updatePost(context, payload) {
    const formData = new FormData();

    formData.append("bno", context.state.details.bno);
    formData.append("id", context.rootState.user.login.loginId);
    formData.append("title", context.state.posts.title);
    formData.append("content", context.state.posts.content);

    for (let i = 0; i < context.state.posts.org_file.length; i++) {
      formData.append("updatefiles", context.state.posts.org_file[i]);
    }
    axios
      .post("/api/board/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        context.commit("setPosts", res.data);
      })
      .catch((e) => {
        console.error("API 호출 실패", e);
      });
  },

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

  getBoardDetail(context, bno) {
    axios
      .get("/api/board/" + bno)
      .then((res) => {
        context.commit("setDetails", res.data);
      })
      .catch((e) => {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
