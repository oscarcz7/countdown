import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Happy from "../views/Happy.vue";
import Song from "../views/Song.vue";

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
  {
    path: "/song",
    name: "Song",
    component: Song,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
