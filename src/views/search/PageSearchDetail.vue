<template>
  <h1>검색 상세 페이지 입니다.</h1>
  <table class="detailtable">
    <tr>
      <td>소환사 이름</td>
    </tr>
    <tr>
      <td>최근 승률</td>
    </tr>
    <tr>
      <td>최근 게임</td>
    </tr>
    <tr>
      <td>챔피언</td>
      <td>kda</td>
      <td>승리/패배</td>
    </tr>
  </table>
  <button @click="handleList">목록</button>
</template>

<script>
export default {
  method: {
    handleList() {
      //api
    },
  },
};
</script>

<style scoped>
.detailtable {
  border: 1px solid;
  text-align: left;
  margin: auto;
}
</style>
