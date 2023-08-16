<template>
  <div class="main">
    <input type="text" name="query" value="" />
    <button @click="handleSeach">검색</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSeach() {
      this.$router.push("search/list");
    },
  },
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
</style>
