<template>
  <div class="login">
    <form name="login" @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="id">아이디</label>
        <input v-model="signup.id" type="text" placeholder="아이디 입력" />
      </div>

      <div class="input-group">
        <label for="pw">비밀번호</label>
        <input
          v-model="signup.password"
          type="password"
          placeholder="비밀번호 입력"
        />
      </div>

      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      signup: (state) => state.signup,
    }),
  },
  methods: {
    handleLogin() {
      if (this.signup.id == "") {
        alert("아이디를 입력해주세요.");
        return;
      }
      if (this.signup.password === "") {
        alert("비밀번호를 입력하세요.");
        return;
      }

      alert("로그인 되었습니다.");
      console.log(this.$store.state.user_ID, this.$store.state.user_PW);
      this.$router.push("/board/list");
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

form {
  width: 300px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
}

.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

label {
  flex: 1;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
}

input[type="text"],
input[type="password"] {
  flex: 2.5;
  padding: 8px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  padding: 5px 5px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
