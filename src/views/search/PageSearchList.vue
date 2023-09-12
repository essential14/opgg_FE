<template>
  <div class="board-list">
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>champion</th>
          <th>kda</th>
          <th>result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.champion">
          <td>{{ game.championName }}</td>
          <td>{{ game.kill }}/{{ game.death }}/{{ game.assist }}</td>
          <td>{{ game.win }}</td>
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
