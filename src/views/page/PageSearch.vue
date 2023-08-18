<template>
  <div class="main">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="소환사명을 입력해주세요."
    />
    <button @click="handleSeach">검색</button>
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
h3 {
  margin: 40px 0 0;
}
</style>
