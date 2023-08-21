import axios from "axios";

const state = {
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
};

const getters = {};

const mutations = {
  setLists(state, data) {
    state.lists = data;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
