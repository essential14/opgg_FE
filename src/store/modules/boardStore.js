import axios from "axios";

const state = {
  lists: [],
  details: {
    bno: "",
    id: "",
    title: "",
    content: "",
    viewcount: "",
    created_date: "",
    updated_date: "",
    fno: "",
    org_file: "",
    stored_file: [],
    group_file: "",
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
    state.details.stored_file = data.fileList.map((file) => file.stored_file);
  },
  setPosts(state, data) {
    state.posts = data;
  },
};

const actions = {
  writePost(context) {
    // 글 쓰기
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

  updatePost(context) {
    // 글 수정
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

  async deletePost(context) {
    //글 삭제
    try {
      const res = await axios.post("/api/board/delete", context.state.details);
      console.log("API 호출 성공", res.data);
      return res;
    } catch (e) {
      console.error("API 호출 실패", error);
      throw error;
    }
  },

  getBoardDetail(context, bno) {
    //글 상세
    axios
      .get("/api/board/" + bno)
      .then((res) => {
        console.log("API 호출 성공", res.data);
        context.commit("setDetails", res.data);
      })
      .catch((e) => {});
  },

  getBoardList(context) {
    // 게시판 목록
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
