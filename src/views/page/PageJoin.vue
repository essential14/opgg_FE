<template>
  <div class="join">
    <form name="jogin " @submit.prevent="handleJoin">
      <div class="input-group">
        <label for="name">이름</label>
        <input v-model="signup.name" type="text" placeholder="이름 입력" />
      </div>
      <div class="input-group">
        <label for="birthday">생년월일</label>
        <input
          v-model="signup.birthday"
          type="date"
          placeholder="생년월일 입력"
        />
      </div>

      <div class="input-group">
        <label for="id">아이디</label>
        <input v-model="signup.id" type="text" placeholder="아이디 입력" />
        <button type="button" @click="handleIdCheck">중복 확인</button>
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input
          v-model="signup.password"
          type="password"
          placeholder="비밀번호 입력"
        />
      </div>

      <div class="input-group">
        <label for="pwCheck">비밀번호 확인</label>
        <input
          v-model="signup.pwCheck"
          type="password"
          placeholder="비밀번호 확인"
        />
      </div>
      <button type="submit">확인</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      signup: (state) => state.user.signup,
    }),
  },
  methods: {
    handleJoin() {
      const idCheck = /^[A-Za-z0-9]{2,10}$/;
      const pwCheck = /^[A-Za-z0-9]{4,10}$/;

      if (!idCheck.test(this.signup.id)) {
        alert("아이디는 2~10자의 영문 대소문자와 숫자로만 입력해주세요.");
        return;
      }

      if (!pwCheck.test(this.signup.password)) {
        alert("비밀번호는 4~10자의 영문 대소문자와 숫자로만 입력해주세요.");
        return;
      }

      if (
        //입력칸 공백 확인
        this.signup.name == "" ||
        this.signup.birthday == "" ||
        this.signup.id == "" ||
        this.signup.password == "" ||
        this.signup.pwCheck == ""
      ) {
        alert("정보를 입력해주세요.");
        return;
      }
      alert("회원가입이 완료 되었습니다.");
      this.$store.dispatch("saveJoinInfo");
      this.$router.push("/page/login");
    },

    async handleIdCheck() {
      try {
        const res = await this.$store.dispatch("idChek");
        // 서버에서 받아온 데이터가 1 이면 중복
        if (res.data == 1) {
          alert("중복된 아이디 입니다.");
          return;
        }
        // 0 이면 사용 가능
        alert("사용 가능한 아이디 입니다.");
      } catch (error) {
        console.error("오류", error);
      }
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
