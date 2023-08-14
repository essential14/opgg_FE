<template>
  <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray">
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
        <tr v-for="(row, idx) in list" :key="idx">
          <td>{{ row.idx }}</td>
          <td>
            <a @click="fnView(`${row.idx}`)">{{ row.title }}</a>
          </td>
          <td>{{ row.author }}</td>
          <td>{{ row.created_at }}</td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="paging.total_list_cnt > 0"
      class="pagination w3-bar w3-padding-16 w3-small"
    >
      <span class="pg">
        <a
          href="javascript:;"
          class="first w3-button w3-border"
          @click="fnPage(1)"
          >&lt;&lt;</a
        >
        <a
          v-if="paging.start_page > 10"
          href="javascript:;"
          class="prev w3-button w3-border"
          @click="fnPage(`${paging.start_page - 1}`)"
          >&lt;</a
        >
        <template v-for="(n, index) in paginavigation()">
          <template v-if="paging.page == n">
            <strong :key="index" class="w3-button w3-border w3-green">{{
              n
            }}</strong>
          </template>
          <template v-else>
            <a
              :key="index"
              class="w3-button w3-border"
              href="javascript:;"
              @click="fnPage(`${n}`)"
              >{{ n }}</a
            >
          </template>
        </template>
        <a
          v-if="paging.total_page_cnt > paging.end_page"
          href="javascript:;"
          class="next w3-button w3-border"
          @click="fnPage(`${paging.end_page + 1}`)"
          >&gt;</a
        >
        <a
          href="javascript:;"
          class="last w3-button w3-border"
          @click="fnPage(`${paging.total_page_cnt}`)"
          >&gt;&gt;</a
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: "", //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
    };
  },
  mounted() {
    this.fnGetList();
  },
  methods: {
    fnGetList() {
      this.list = [
        {
          idx: 1,
          title: "제목1",
          author: "작성자1",
          created_at: "작성일시1",
        },
        {
          idx: 2,
          title: "제목1",
          author: "작성자1",
          created_at: "작성일시1",
        },
        {
          idx: 3,
          title: "제목1",
          author: "작성자1",
          created_at: "작성일시1",
        },
      ];
    },
  },
};
</script>
