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
          <div v-for="file in details.stored_file" :key="file">
            <img :src="'/images/' + file" alt="첨부된파일 없음" />
          </div>
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
        @click="handleDelete"
      >
        삭제
      </button>
      <CommentList />
    </div>
  </div>
</template>

<script>
import CommentList from "@/views/comment/CommentList.vue";
import { mapState } from "vuex";
export default {
  components: {
    CommentList,
  },
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
    async handleDelete() {
      try {
        const res = await this.$store.dispatch("deletePost");
        if (res.data == 1) {
          alert("삭제가 완료 되었습니다.");
          this.$router.push("/board/list");
          return;
        }
        alert("삭제에 실패하였습니다.");
      } catch (error) {
        console.error("오류", error);
      }
    },
    handleUpdate() {
      this.$router.push("/board/update");
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
  margin-top: 15px;
}
</style>
