import Vue from "vue";
import VueRouter from "vue-router";
import Wrapper from "../views/PictureWrapper.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Wrapper",
    component: Wrapper
  },
  {
    path: "/borders",
    name: "Borders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "borders" */ "../views/BorderWrapper.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;