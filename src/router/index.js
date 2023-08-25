import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import MainPage from "../pages/MainPage.vue";

const routes = [
  {
    name: "Default",
    path: "",
    redirect: { path: "/login" },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Main",
    path: "/main",
    component: MainPage,
  },
];

const router = Router();

export default router;

function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}
