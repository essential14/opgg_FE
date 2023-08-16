<template>
  <h1>글 쓰기 페이지입니다.</h1>
  <div class="write">
    <form
      name="write"
      @submit.prevent="handleWrite"
    >
      <div class="input-group">
        <label>제목</label>
        <input
          id="board_title"
          v-model="board_title"
          type="text"
        >
      </div>
      <div class="input-group">
        <label>파일첨부</label>
        <input
          id="file_up"
          type="file"
        >
      </div>
      <div class="input-group">
        <label>내용</label>
        <input
          id="user_PW"
          v-model="board_content"
          type="text"
          name="board_content"
        >
      </div>

      <button type="submit">
        확인
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board_title: "",
      board_content: "",
    };
  },
  methods: {
    handleWrite() {
      // 로직 구현 자리
      this.$router.push("/board/list");
      console.log(this.board_title, this.board_title);
    },
  },
};
</script>

<style scoped></style>
