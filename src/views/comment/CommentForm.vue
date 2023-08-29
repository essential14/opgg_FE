<template>
  <div class="comment-form">
    <textarea
      v-model="content"
      placeholder="댓글을 입력하세요..."
      rows="4"
      class="comment-textarea"
    ></textarea>
    <button class="comment-submit" @click="handleForm">제출</button>
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
    handleForm() {
      const commentData = {
        content: this.content,
        bno: this.$store.state.board.details.bno,
        id: this.$store.state.user.login.loginId,
      };

      this.$store.dispatch("writeComment", commentData);
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

.comment-textarea {
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
