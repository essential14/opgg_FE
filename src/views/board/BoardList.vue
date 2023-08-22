<template>
  <div class="board-list">
    <div class="common-buttons">
      <button
        type="button"
        class="w3-button w3-round w3-blue"
        @click="handleWrite"
      >
        등록
      </button>
    </div>
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, bno) in lists" :key="bno">
          <td>{{ row.bno }}</td>
          <td>
            <a @click="getView(`${row.bno}`)">{{ row.title }}</a>
          </td>

          <td>{{ row.id }}</td>
          <td>{{ row.board_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.getList();
  },
  computed: {
    ...mapState({
      lists: (state) => state.board.lists,
    }),
  },
  methods: {
    getView(bno) {
      this.$router.push("/board/" + bno);
    },
    handleWrite() {
      this.$router.push("/board/write");
    },
    getList() {
      this.$store.dispatch("getBoardList");
    },
  },
};
</script>
