<template>
  <div class="login">
    <form id="loginForm" @submit.prevent="handleLogin">
      <div class="input-group">
        <input
          class="w3-input"
          :value="login.loginId"
          @input="updateLoginId"
          type="text"
          placeholder="아이디 입력"
        />
      </div>

      <div class="input-group">
        <input
          class="w3-input"
          :value="login.loginPassword"
          @input="updateLoginPassword"
          type="password"
          placeholder="비밀번호 입력"
        />
      </div>
      <div class="common-buttons">
        <button class="w3-button w3-blue w3-round" type="submit">로그인</button>
      </div>
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
#loginForm {
  width: 20%;
  margin: auto;
  margin-top: 1%;
}
.input-group {
  margin-top: 10px;
  width: 100%;
}
</style>
