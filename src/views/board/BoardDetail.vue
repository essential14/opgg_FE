<template>
  <div class="board-list">
    <table class="detail-table">
      <tr>
        <th>제목</th>
        <td colspan="3">{{ details.title }}</td>
      </tr>
      <tr>
        <th>아이디</th>
        <td>{{ details.id }}</td>
        <th>등록일</th>
        <td>{{ details.created_date }}</td>
      </tr>
      <tr>
        <th>수정일</th>
        <td>{{ details.updated_date }}</td>
        <th>조회수</th>
        <td>{{ details.viewcount }}</td>
      </tr>
      <tr>
        <th>내용</th>
        <td colspan="3" class="content-box">{{ details.content }}</td>
      </tr>
      <tr>
        <th>첨부파일</th>
        <td colspan="3">
          <img :src="'/images/' + details.stored_file" alt="첨부된파일 없음" />
        </td>
      </tr>
    </table>
    <div class="common-buttons">
      <button class="w3-button w3-round w3-blue" @click="handleList">
        목록
      </button>
      <button
        class="w3-button w3-round w3-gray"
        @click="handleUpdate"
        v-if="isUser"
      >
        수정
      </button>
      <button
        class="w3-button w3-round w3-red"
        v-if="isUser"
        @click="deleteDetail"
      >
        삭제
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    const bno = this.$route.params.bno; // 라우터 경로에서 bno 가져옴
    if (bno) {
      this.$store.dispatch("getBoardDetail", bno);
    }
  },
  computed: {
    ...mapState({
      details: (state) => state.board.details,
      posts: (state) => state.board.posts,
      loginId: (state) => state.user.login.loginId,
    }),
    isUser() {
      return this.details.id == this.loginId;
    },
  },
  methods: {
    handleList() {
      this.$router.push("/board/list");
    },
    deleteDetail() {
      this.$router.push("/board/list");
    },
    handleUpdate() {
      this.$router.push("/board/detail");
    },
  },
};
</script>

<style scoped>
.detail-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.detail-table th,
.detail-table td {
  border: 1px solid #dcdcdc;
  padding: 10px 15px;
  text-align: left;
}

.detail-table tr:hover {
  background-color: #f0f0f0;
}

.detail-table th {
  background-color: #f0f0f0;
  color: #555;
}

.content-box {
  padding: 15px;
  background-color: #fff;
}

.detail-table img {
  max-width: 100%;
  height: auto;
}

.w3-button {
  margin-left: 10px;
}
</style>
