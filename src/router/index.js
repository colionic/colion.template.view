import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/About/AboutView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
