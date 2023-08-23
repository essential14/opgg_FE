<template>
  <div class="board-list">
    <table class="w3-table-all">
      <tr>
        <td>제목 : {{ details.title }}</td>
      </tr>
      <tr>
        <td>아이디 : {{ details.id }}</td>
        <td>{{ details.board_date }}</td>
        <td>조회수 : {{ details.viewcount }}</td>
      </tr>
      <tr>
        <td>{{ details.content }}</td>
      </tr>
    </table>
    <div class="common-buttons">
      <button class="w3-button w3-round w3-blue" @click="handleList">
        목록
      </button>
      <button class="w3-button w3-round w3-red" @click="deleteDetail">
        삭제
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    const bno = this.$route.params.bno; // 라우터 경로에서 bno 가져옴
    if (bno) {
      this.$store.dispatch("getBoardDetail", bno);
    }
  },
  computed: {
    ...mapState({
      details: (state) => state.board.details,
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

<style scoped>
.w3-button {
  margin-left: 10px;
}
</style>
