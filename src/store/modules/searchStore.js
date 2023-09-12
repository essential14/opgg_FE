import axios from "axios";

const state = {
  games: [],
  summonerName: "",
};

const getters = {};

const mutations = {
  setGames(state, data) {
    state.games = data;
  },
};

const actions = {
  async searchSummoner(context, summonerName) {
    try {
      const res = await axios.post("/api/page/search", {
        summonerName,
      });
      context.commit("setGames", res.data);
    } catch (e) {
      console.error("API 호출 실패", e);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
