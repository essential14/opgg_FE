<template>
  <div class="board-list">
    <table class="w3-table-all">
      <tr v-for="detail in details" :key="detail.id">
        <td>{{ detail.title }}</td>
        <td>{{ detail.id }}</td>
        <td>{{ detail.board_date }}</td>
        <td>{{ detail.viewcount }}</td>
      </tr>
      <tr>
        <td>{{ detail.content }}</td>
        <td>{{ detail.file }}</td>
      </tr>
    </table>
    <button class="w3-button w3-round w3-blue" @click="handleList">목록</button>
    <button class="w3-button w3-round w3-red" @click="deleteDetail">
      삭제
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created: {
    getView() {
      this.$store.dispatch("getDetail");
    },
  },
  computed: {
    ...mapState({
      details: (state) => state.board.detail,
    }),
  },
  methods: {
    handleList() {
      this.$router.push("/board/list");
    },
    deleteDetail() {
      this.$router.push("/board/list");
    },
  },
};
</script>

<style scoped></style>
