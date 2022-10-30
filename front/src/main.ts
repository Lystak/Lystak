import "./style/tailwind.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { getUsers } from "./helpers/api";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

console.log(getUsers())
