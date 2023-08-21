<template>
  <div class="write">
    <form name="write_form" @submit.prevent="handleWrite">
      <div class="input-group">
        <label>제목</label>
        <input id="board_title" v-model="board_title" type="text" />
      </div>
      <div class="input-group">
        <label>파일첨부</label>
        <input id="file_up" type="file" />
      </div>
      <div class="input-group">
        <label>내용</label>
        <textarea
          id="user_PW"
          v-model="board_content"
          type="text"
          name="board_content"
        >
        </textarea>
      </div>

      <button type="submit">확인</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board_title: "",
      board_content: "",
    };
  },
  methods: {
    handleWrite() {
      // 로직 구현 자리
      this.$router.push("/board/list");
      console.log(this.board_title, this.board_title);
    },
  },
};
</script>

<style scoped>
.write {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  width: 80%;
  margin: 20px auto;
  border-radius: 8px;
}

.write_form {
  width: 300px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
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
