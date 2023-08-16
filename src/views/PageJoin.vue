<template>
  <div class="join">
    <form name="jogin " @submit.prevent="handlejoin">
      <div class="input-group">
        <label for="name">이름</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          placeholder="이름 입력"
        />
      </div>
      <div class="input-group">
        <label for="birthday">생년월일</label>
        <input
          id="birthday"
          v-model="birthday"
          type="date"
          name="birthday"
          placeholder="생년월일 입력"
        />
      </div>

      <div class="input-group">
        <label for="user_id">아이디</label>
        <input
          id="user_id"
          v-model="user_id"
          type="text"
          name="user_id"
          placeholder="아이디 입력"
        />
        <button type="button">중복 확인</button>
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="비밀번호 입력"
        />
      </div>

      <div class="input-group">
        <label for="pwCheck">비밀번호 확인</label>
        <input
          v-if="true"
          id="pwCheck"
          v-model="pwCheck"
          type="password"
          name="pwCheck"
          placeholder="비밀번호 확인"
        />
      </div>
      <button type="submit">확인</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      birthday: "",
      user_id: "",
      password: "",
      pwCheck: "",
    };
  },
  methods: {
    handlejoin() {
      // 로그인 처리 로직 쓰기
      // 로그인 성공 시, PageHome으로 이동
      this.$router.push("/login");
      console.log(
        this.name,
        this.birthday,
        this.user_id,
        this.password,
        this.pwCheck
      );
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
  width: 500px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
}

.input-group {
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
}

label {
  flex: 1;
  font-weight: bold;
  text-align: left;
  margin-right: 10px;
}

input[type="text"],
input[type="password"],
input[type="date"] {
  flex: 2;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  text-align: left;
}

button[type="button"] {
  flex: none;
  padding: 5px 5px;
  font-size: 12px;
  margin-left: 10px;
}

button {
  flex: 1;
  padding: 5px 10px;
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
