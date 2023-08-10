<template>
  <div class="join">
    <form
      name="jogin "
      @submit.prevent="handlejoin"
    >
      <div class="input-group">
        <label for="user_ID">ID</label>
        <input
          id="user_ID"
          type="text"
          name="user_ID"
          placeholder="아이디 입력"
        >
        <button type="button">
          중복 확인
        </button>
      </div>

      <div class="input-group">
        <label for="user_PW1">Password</label>
        <input
          id="user_PW1"
          type="password"
          name="user_PW1"
          placeholder="비밀번호 입력"
        >
      </div>

      <div class="input-group">
        <label for="user_PWcheck">Password Confirm</label>
        <input
          id="user_PWcheck"
          type="password"
          name="user_PWcheck"
          placeholder="비밀번호 확인"
        >
      </div>
      <button type="submit">
        확인
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handlejoin() {
      // 로그인 처리 로직 쓰기
      // 로그인 성공 시, PageHome으로 이동
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.join {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

form {
  width: 400px;
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
  margin-right: 10px;
}

input[type="text"],
input[type="password"] {
  flex: 2;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button[type="button"] {
  flex: none;
  padding: 6px 8px;
  font-size: 12px;
  margin-left: 10px;
}

button {
  flex: 1;
  padding: 8px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

button:hover {
  background-color: #0056b3;
}
</style>
