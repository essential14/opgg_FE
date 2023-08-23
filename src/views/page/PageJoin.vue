<template>
  <div class="join">
    <form id="joinForm" @submit.prevent="handleJoin">
      <div class="input-group">
        <input
          class="w3-input"
          v-model="signup.name"
          type="text"
          placeholder="이름 입력"
        />
      </div>
      <div class="input-group">
        <input
          class="w3-input"
          v-model="signup.birthday"
          type="date"
          placeholder="생년월일 입력"
        />
      </div>

      <div class="input-group">
        <input
          class="w3-input"
          v-model="signup.id"
          type="text"
          placeholder="아이디 입력"
        />
        <div class="common-buttons">
          <button
            class="w3-button w3-blue w3-round"
            type="button"
            @click="handleIdCheck"
          >
            중복 확인
          </button>
        </div>
      </div>

      <div class="input-group">
        <input
          class="w3-input"
          v-model="signup.password"
          type="password"
          placeholder="비밀번호 입력"
        />
      </div>

      <div class="input-group">
        <input
          class="w3-input"
          v-model="signup.pwCheck"
          type="password"
          placeholder="비밀번호 확인"
        />
      </div>
      <div class="common-buttons">
        <button class="w3-button w3-blue w3-round" type="submit">확인</button>
      </div>
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
#joinForm {
  width: 20%;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-top: 10px;
}
</style>
