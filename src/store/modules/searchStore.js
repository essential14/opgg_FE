// import axios from "axios";

const state = {
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
};

const getters = {};

const mutations = {
  setGames(state, data) {
    state.games = data;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
