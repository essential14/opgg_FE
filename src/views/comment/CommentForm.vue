<template>
  <div class="comment-form">
    <form>
      <input
        v-model="content"
        placeholder="댓글을 입력하세요."
        rows="4"
        class="comment-input"
      />
    </form>
    <button class="comment-submit" @click="handleForm">등록</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    async handleForm() {
      try {
        const commentData = {
          content: this.content,
          bno: this.$store.state.board.details.bno,
          id: this.$store.state.user.login.loginId,
        };
        const res = await this.$store.dispatch("writeComment", commentData);
        if (res.data == 1) {
          alert("댓글이 등록되었습니다.");
          const bno = this.$route.params.bno;
          await this.$store.dispatch("getCommentList", bno);
          this.content = "";
          return;
        }

        alert("작성에 실패하였습니다.");
      } catch (e) {
        console.error("오류", e);
        alert("작성 중 오류가 발생했습니다.");
      }
    },
  },
};
</script>

<style scoped>
.comment-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comment-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.comment-submit {
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comment-submit:hover {
  background-color: #0056b3;
}
</style>
