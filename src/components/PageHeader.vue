<template>
  <header>
    <div id="nav">
      <router-link to="/"> Home |</router-link>
      <router-link to="/board/list"> 커뮤니티 |</router-link>
      <router-link to="/page/login" v-if="!isLoggedIn"> 로그인 |</router-link>
      <a href="#" v-if="isLoggedIn" @click="handleLogout"> 로그아웃 |</a>
      <router-link to="/page/join" v-if="!isLoggedIn"> 회원가입 </router-link>
      <p v-if="isLoggedIn">{{ loginId }}</p>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.user.isLoggedIn,
      loginId: (state) => state.user.login.loginId,
    }),
  },
  methods: {
    handleLogout() {
      this.$store.commit("logout");
      this.$router.push("/page/login");
    },
  },
};
</script>

<style scoped></style>
