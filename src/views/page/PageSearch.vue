<template>
  <div id="searchForm">
    <input
      class="w3-input"
      type="text"
      v-model="searchQuery"
      placeholder="소환사명을 입력해주세요."
    />
    <div class="common-buttons">
      <button class="w3-button w3-blue w3-round" @click="handleSeach">
        검색
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSeach() {
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
