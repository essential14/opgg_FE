<template>
  <h1>상세 페이지 입니다.</h1>
  <table class="detailtable">
    <tr>
      <td>번호</td>
      <td>제목</td>
      <td>작성자</td>
      <td>작성일</td>
    </tr>
    <tr>
      <td>내용</td>
    </tr>
  </table>
  <button @click="handleList">목록</button>
  <button @click="deleteDetail">삭제</button>
</template>

<script>
export default {
  method: {
    handleList() {
      this.$router.push("/board/list");
    },
    handleDetail() {
      this.$router.push("/board/list");
    },
  },
};
</script>

<style scoped>
.detailtable {
  border: 1px solid;
  text-align: center;
  margin: auto;
}
</style>
