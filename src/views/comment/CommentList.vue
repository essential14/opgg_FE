<template>
  <div class="comment-wrapper">
    <div class="comment-list">
      <div
        v-for="list in lists"
        :key="list.cno"
        class="comment-item"
        :style="{ paddingLeft: getIndentation(list.depth) }"
      >
        <div class="comment-content">{{ list.content }}</div>
        <div class="comment-actions">
          <button class="btn-reply" @click="handlereply(list)">댓글</button>
          <button class="btn-edit" @click="updateComment(list)">수정</button>
          <button class="btn-delete" @click="deleteComment(list.cno)">
            삭제
          </button>
        </div>
        <div v-if="showReplyInput === list.cno" class="reply-input">
          <input
            class="comment-input"
            v-model="replyContent"
            placeholder="댓글을 입력하세요."
          />
          <button class="btn-submitReply" @click="submitReply(list)">
            등록
          </button>
        </div>
      </div>
    </div>
    <CommentForm />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommentForm from "./CommentForm.vue";

export default {
  components: {
    CommentForm,
  },

  data() {
    return {
      showReplyInput: null,
      replyContent: "",
    };
  },

  computed: {
    ...mapState({
      lists: (state) => state.comment.lists,
    }),
  },

  created() {
    const bno = this.$route.params.bno;
    if (bno) {
      this.$store.dispatch("getCommentList", bno);
    }
  },

  methods: {
    handlereply(lists) {
      this.$store.commit("setReply", lists);
      this.showReplyInput = //cno 값 가져 오기
        this.showReplyInput === lists.cno ? null : lists.cno;
    },

    async submitReply(parent) {
      try {
        const replyData = {
          content: this.replyContent,
          bno: this.$store.state.board.details.bno,
          id: this.$store.state.user.login.loginId,
          cno: parent.cno, // 부모 댓글의 cno (선택한 댓글의 cno)
          depth: parent.depth,
          group_cno: parent.group_cno,
        };

        const res = await this.$store.dispatch("writeComment", replyData);
        if (res.data == 1) {
          alert("댓글이 등록되었습니다.");
          const bno = this.$route.params.bno;
          await this.$store.dispatch("getCommentList", bno);
          this.showReplyInput = null; // 대댓글 입력 창 숨기기
          this.replyContent = "";
        }
      } catch (e) {
        console.error("댓글 작성 중 오류", e);
      }
    },

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
  overflow-y: auto;
}

.comment-item {
  border-bottom: 1px dashed #ddd;
  padding: 8px 0;
  position: relative;
  text-align: left;
}

.comment-content {
  padding-right: 90px;
}

.comment-actions {
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
}
.comment-input {
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.btn-edit {
  background-color: #aaa8a8;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
}
button.btn-delete {
  background-color: #f44336;
  color: #fdfdfd;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
}

button.btn-reply {
  background-color: #2196f3;
  color: #fdfdfd;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px;
}

button.btn-submitReply {
  background-color: #2196f3;
  color: #fdfdfd;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 5px;
}

button.btn-edit:hover,
button.btn-delete:hover {
  background-color: #7e7e7e;
}
</style>
