<template>
  <div class="login">
    <form name="login" @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="user_ID">ID</label>
        <input
          id="user_ID"
          type="text"
          name="user_ID"
          placeholder="아이디 입력"
          v-model="user_ID"
        />
      </div>

      <div class="input-group">
        <label for="user_PW">Password</label>
        <input
          id="user_PW"
          type="password"
          name="user_PW"
          placeholder="비밀번호 입력"
          v-model="user_PW"
        />
      </div>

      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      // 로그인 처리 로직 (예: axios로 서버에 POST 요청 등)
      // 로그인 성공 시, PageHome으로 이동
      this.$router.push("/");
      console.log(this.user_ID, this.user_PW);
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
  padding: 10px 15px;
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
