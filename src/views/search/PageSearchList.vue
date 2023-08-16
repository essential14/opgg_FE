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
      <tr v-for="game in games" :key="game.champion">
        <td>{{ game.champion }} |</td>
        <td>{{ game.kda }} |</td>
        <td>{{ game.result }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          champion: "아리",
          kda: "5/0/10",
          result: "승리",
        },
        {
          champion: "야스오",
          kda: "3/7/2",
          result: "패배",
        },
        {
          champion: "베인",
          kda: "3/20/2",
          result: "패배",
        },
      ],
    };
  },
};
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
