import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RouteName from "./RouteName";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteName.Login,
      component: LoginView,
    },
    {
      // Display all lists
      path: "/list",
      name: RouteName.Home,
      component: () => import("../views/HomeView.vue"),
    },
    {
      // Display a list with all its items
      path: "/list/:listID/:edit?",
      name: RouteName.List,
      component: () => import("../views/ListView.vue"),
    },
    {
      // Display an item of a list
      path: "/list/:listID/item/:itemID",
      name: RouteName.Item,
      component: () => import("../views/ItemView.vue"),
    },
    {
      // Display user informations
      path: "/profile",
      name: RouteName.Profile,
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
