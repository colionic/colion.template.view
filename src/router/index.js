import Vue from "vue";
import VueRouter from "vue-router";
import LayoutView from "@/views/Layout/LayoutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LayoutView
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
