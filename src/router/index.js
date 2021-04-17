import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Happy from "../views/Happy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/happy",
    name: "Happy",
    component: Happy,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
