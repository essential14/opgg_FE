<template>
  <div class="update">
    <form name="update_form" @submit.prevent="handleUpdate">
      <div class="input-group">
        <input
          id="title"
          v-model="title"
          type="text"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div class="input-group">
        <input id="org_file" type="file" multiple @change="onChangeFile" />
      </div>
      <div class="input-group">
        <textarea
          id="content"
          v-model="content"
          placeholder="내용을 입력해주세요"
        ></textarea>
      </div>
      <button type="submit">확인</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      content: "",
      file: [],
    };
  },

  computed: {
    ...mapState({
      details: (state) => state.board.details,
      posts: (state) => state.board.posts,
    }),
  },
  mounted() {
    this.title = this.details.title;
    this.content = this.details.content;
  },

  methods: {
    handleUpdate() {
      this.$store.commit("setPosts", {
        title: this.title,
        content: this.content,
        org_file: this.file,
      });
      this.$store.dispatch("updatePost");
      this.$router.push("/board/list");
    },
    onChangeFile(event) {
      this.file = event.target.files;
    },
  },
};
</script>

<style scoped>
.update {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: auto;
}

.input-group {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
}

input[type="text"],
input[type="file"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  height: 150px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>
