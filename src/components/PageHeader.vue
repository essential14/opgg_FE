<template>
  <header>
    <div id="nav">
      <router-link to="/"> Home |</router-link>
      <router-link to="/board/list"> 커뮤니티 |</router-link>
      <router-link to="/page/login" v-show="!isLoggedIn"> 로그인 |</router-link>
      <a href="#" v-show="isLoggedIn" @click="handleLogout"> 로그아웃 |</a>
      <router-link to="/page/join" v-show="!isLoggedIn"> 회원가입 </router-link>
      {{ this.$store.state.id }}
    </div>
  </header>
  <hr />
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["id"]),
    isLoggedIn() {
      return (
        sessionStorage.getItem("id") !== null &&
        sessionStorage.getItem("id") !== ""
      );
    },
  },
  methods: {
    handleLogout() {
      sessionStorage.removeItem("id");
      this.$router.push("/page/login");
    },
  },
};
</script>

<style scoped></style>
