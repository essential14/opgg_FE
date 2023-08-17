import { createStore } from "vuex";

import axios from "axios";
export default createStore({
  state: {
    signup: {
      name: "",
      birthday: "",
      id: "",
      password: "",
      pwCheck: "",
    },

    lists: [
      {
        bno: 1,
        title: "제목1",
        writer: "작성자1",
        board_date: "작성일시1",
      },
      {
        bno: 2,
        title: "제목1",
        writer: "작성자1",
        board_date: "작성일시1",
      },
      {
        bno: 3,
        title: "제목1",
        writer: "작성자1",
        board_date: "작성일시1",
      },
    ],
    games: [
      {
        champion: "아리",
        kda: "5/0/10",
        result: "승리",
      },
      {
        champion: "야스오",
        kda: "3/7/2",
        result: "패배",
      },
      {
        champion: "베인",
        kda: "3/20/2",
        result: "패배",
      },
    ],
  },
  getters: {
    getSignup: (state) => state.signup,
  },
  mutations: {
    setLists(state, data) {
      state.lists = data;
    },
    setGames(state, data) {
      state.games = data;
    },
    setSignup(state, data) {
      state.signup = data;
    },
  },
  actions: {
    saveJoinInfo(context) {
      console.log("API 호출 시작"); // <- 로그 추가
      axios
        .post("http://localhost:8080/page/join", context.state.signup)
        .then((res) => {
          context.commit("setSignup", res.data);
          console.log("API 호출 성공", res.data); // <- 로그 추가
        })
        .catch((error) => {
          console.error("API 호출 실패", error);
        });
    },
  },
  modules: {},
});
