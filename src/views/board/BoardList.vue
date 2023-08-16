<template>
  <div class="board-list">
    <div class="common-buttons">
      <button
        type="button"
        class="w3-button w3-round w3-blue-gray"
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
        <tr v-for="(row, bno) in list" :key="bno">
          <td>{{ row.bno }}</td>
          <td>
            <a @click="getView(`${row.bno}`)">{{ row.title }}</a>
          </td>
          <td>{{ row.writer }}</td>
          <td>{{ row.board_date }}</td>
        </tr>
      </tbody>
    </table>
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
    this.GetList();
  },
  methods: {
    handleWrite() {
      this.$router.push("/board/write");
    },

    GetList() {
      this.list = [
        {
          bno: 1,
          title: "제목1",
          writer: "작성자1",
          board_date: "작성일시1",
        },
        {
          bno: 2,
          title: "제목1",
          writer: "작성자1",
          board_date: "작성일시1",
        },
        {
          bno: 3,
          title: "제목1",
          writer: "작성자1",
          board_date: "작성일시1",
        },
      ];
    },
  },
};
</script>
