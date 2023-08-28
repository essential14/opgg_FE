import axios from "axios";

const state = {
  signup: {
    name: "",
    birthday: "",
    id: "",
    password: "",
    pwCheck: "",
  },

  login: {
    loginId: sessionStorage.getItem("id") || "",
    loginPassword: "",
  },

  isLoggedIn: !!sessionStorage.getItem("id"),
};

const getters = {
  getLogin: (state) => state.login,
};

const mutations = {
  setId(state, data) {
    state.login.loginId = data;
  },
  setPassword(state, data) {
    state.login.loginPassword = data;
  },
  login(state, loginId) {
    state.login.loginId = loginId;
    state.isLoggedIn = true;
    sessionStorage.setItem("id", loginId);
  },
  logout(state) {
    state.login.loginId = "";
    state.isLoggedIn = false;
    sessionStorage.removeItem("id");
  },
};

const actions = {
  saveJoinInfo(context) {
    console.log("API 호출 시작");
    axios
      .post("/api/page/join", context.state.signup)
      .then((res) => {
        // context.commit("setSignup", res.data); 값 저장 후 다시 회원가입 시도 시 type error 발생으로 주석 처리
        console.log("API 호출 성공", res.data);
      })
      .catch((e) => {
        console.error("API 호출 실패", e);
      });
  },

  async idChek(context) {
    try {
      const res = await axios.post("/api/page/idcheck", context.state.signup);
      console.log("API 호출 성공", res.data);
      return res;
    } catch (e) {
      console.error("API 호출 실패", e);
      throw error;
    }
  },

  async saveLoginId(context) {
    try {
      const res = await axios.post("/api/page/login", {
        id: context.state.login.loginId,
        password: context.state.login.loginPassword,
      });

      if (!res.data.id) {
        throw new Error("로그인 실패");
      }
      context.commit("login", res.data.id);
    } catch (e) {
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
