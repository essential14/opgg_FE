<template>
  <h1>전적</h1>
  <table class="listTable">
    <thead class="">
      <tr>
        <th>챔피언 이름 |</th>
        <th>kda |</th>
        <th>승/패</th>
        <!-- 정렬 이상함 ㅡㅡ -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in $store.state.games" :key="game.champion">
        <td>{{ game.champion }} |</td>
        <td>{{ game.kda }} |</td>
        <td>{{ game.result }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style scoped>
.listTable {
  border: 1px solid;
  text-align: left;
  margin: auto;
}

.listTable th {
  margin: auto;
}

.listTable td {
  margin: auto;
}
</style>
