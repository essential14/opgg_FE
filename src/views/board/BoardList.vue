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
          <th>등록일</th>
          <th>수정일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, bno) in lists" :key="bno">
          <td>{{ row.bno }}</td>
          <td>
            <router-link :to="`/board/${row.bno}`">{{ row.title }}</router-link>
          </td>

          <td>{{ row.id }}</td>
          <td>{{ row.created_date }}</td>
          <td>{{ row.updated_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.getList();
  },
  computed: {
    ...mapState({
      lists: (state) => state.board.lists,
    }),
  },
  methods: {
    handleWrite() {
      this.$router.push("/board/write");
    },
    getList() {
      this.$store.dispatch("getBoardList");
    },
  },
};
</script>
