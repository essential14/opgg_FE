<template>
  <div class="login">
    <form name="login" @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="id">아이디</label>
        <input
          :value="login.loginId"
          @input="updateLoginId"
          placeholder="아이디 입력"
        />
      </div>

      <div class="input-group">
        <label for="pw">비밀번호</label>
        <input
          :value="login.loginPassword"
          @input="updateLoginPassword"
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
      login: (state) => state.user.login,
    }),
  },
  methods: {
    updateLoginId(event) {
      this.$store.commit("setId", event.target.value);
    },
    updateLoginPassword(event) {
      this.$store.commit("setPassword", event.target.value);
    },
    async handleLogin() {
      if (this.login.loginId == "" || this.login.loginPassword == "") {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return;
      }
      try {
        await this.$store.dispatch("saveLoginId");
        this.$router.push("/board/list");
      } catch (e) {
        alert("로그인 실패");
      }
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
