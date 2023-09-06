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
          <th @click="sort('bno')">No</th>
          <th @click="sort('title')">제목</th>
          <th @click="sort('id')">작성자</th>
          <th @click="sort('created_date')">등록일</th>
          <th @click="sort('updated_date')">수정일</th>
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
  <div class="pagination">
    <button
      v-if="sortPg.current_page > 1"
      class="prev w3-button w3-border"
      @click="changePage(sortPg.current_page - 1)"
    >
      이전
    </button>

    <button
      v-for="(n, index) in displayedPages"
      :key="index"
      :class="[
        'w3-button',
        'w3-border',
        pagination.current_page === n ? 'w3-green' : '',
      ]"
      @click="changePage(n)"
    >
      {{ n }}
    </button>

    <button
      v-if="sortPg.current_page < pagination.total_pages"
      class="next w3-button w3-border"
      @click="changePage(sortPg.current_page + 1)"
    >
      다음
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {},
  created() {
    this.getList();
  },
  computed: {
    ...mapState({
      lists: (state) => state.board.lists,
      pagination: (state) => state.board.pagination,
      sortPg: (state) => state.board.sortPg,
    }),
    displayedPages() {
      let pages = [];
      for (
        let i = this.pagination.start_page;
        i <= this.pagination.end_page;
        i++
      ) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    handleWrite() {
      this.$router.push("/board/write");
    },
    getList() {
      this.$store.dispatch("getBoardList");
    },
    changePage(page) {
      this.$store.commit("setSortPg", {
        current_page: page,
        sort_by: this.sortPg.sort_by,
        order: this.sortPg.order,
      });
      this.getList();
    },
    sort(item) {
      this.order = this.order === "asc" ? "desc" : "asc";
      this.$store.commit("setSortPg", {
        current_page: 1,
        sort_by: item,
        order: this.order,
      });
      this.getList();
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
