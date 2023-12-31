/* main.js */

import "./assets/common.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from './store'

const app = createApp(App).use(store);
app.config.globalProperties.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = "//localhost:8080"; //api server
app.use(router).mount("#app");
