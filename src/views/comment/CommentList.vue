<template>
  <div class="comment-wrapper">
    <div class="comment-list">
      <div
        v-for="comment in comments"
        :key="comment.cno"
        class="comment-item"
        :style="{ paddingLeft: getIndentation(comment.depth) }"
      >
        <div class="comment-content">{{ comment.content }}</div>
        <div class="comment-actions">
          <button class="btn-edit" @click="updateComment(comment)">수정</button>
          <button class="btn-delete" @click="deleteComment(comment.cno)">
            삭제
          </button>
        </div>
      </div>
    </div>
    <CommentForm />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommentForm from "./CommentForm.vue";

export default {
  components: {
    CommentForm,
  },
  computed: {
    ...mapState(["comments"]),
  },
  methods: {
    ...mapActions(["deleteComment", "updateComment"]),
    getIndentation(depth) {
      const indentSize = 20;
      return `${depth * indentSize}px`; // depth 1 일 때 20 만큼 들여쓰기
    },
  },
};
</script>

<style scoped>
.comment-wrapper {
  margin: 0 auto;
  margin-top: 30px;
}

.comment-list {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  height: 200px;
}

.comment-item {
  border-bottom: 1px dashed #ddd;
  padding: 8px 0;
  position: relative;
}

.comment-content {
  padding-right: 90px;
}

.comment-actions {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

button.btn-edit,
button.btn-delete {
  background-color: #f7f7f7;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
}

button.btn-edit:hover {
  background-color: #d9e4ff;
}

button.btn-delete:hover {
  background-color: #ffc1c1;
}
</style>
