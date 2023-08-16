<template>
  <h1>수정 페이지 입니다.</h1>
  <div class="write">
    <form name="login" @submit.prevent="handleUpdate">
      <div class="input-group">
        <label>제목</label>
        <input type="text" name="title" v-on="title" />
      </div>
      <div class="input-group">
        <label>파일첨부</label>
        <input type="file" name="file_up" />
      </div>
      <div class="input-group">
        <label>내용</label>
        <input id="user_PW" type="text" name="board_content" />
      </div>

      <button type="submit">확인</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleUpdate() {
      // 로직 구현 자리
      this.$router.push("/board/detail");
    },
  },
};
</script>

<style scoped></style>
