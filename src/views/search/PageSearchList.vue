<template>
  <div class="board-list">
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>챔피언 이름</th>
          <th>kda</th>
          <th>결과</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.champion">
          <td>{{ game.champion }}</td>
          <td>{{ game.kda }}</td>
          <td>{{ game.result }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      games: (state) => state.search.games,
    }),
  },
};
</script>

<style scoped></style>
