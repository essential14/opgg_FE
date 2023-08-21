<template>
  <header>
    <div id="nav">
      <router-link to="/"> Home |</router-link>
      <router-link to="/board/list"> Community |</router-link>
      <router-link to="/page/login" v-if="!isLoggedIn"> Login |</router-link>
      <a href="#" v-if="isLoggedIn" @click="handleLogout"> Logout |</a>
      <router-link to="/page/join" v-if="!isLoggedIn"> Join </router-link>
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
