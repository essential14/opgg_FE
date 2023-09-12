<template>
  <div id="searchForm">
    <input
      class="w3-input"
      type="text"
      v-model="summonerName"
      placeholder="소환사명을 입력해주세요."
    />
    <div class="common-buttons">
      <button class="w3-button w3-blue w3-round" @click="handleSearch">
        검색
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summonerName: "",
    };
  },
  methods: {
    handleSearch() {
      this.$store.dispatch("searchSummoner", this.summonerName); //로컬에 있는 summonerName 을 바로 전달
      this.$router.push("/search/list");
    },
  },
};
</script>

<style>
#searchForm {
  width: 500px;
  margin: auto;
}
</style>
