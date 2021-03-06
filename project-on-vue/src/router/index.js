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
  },
  {
    path: "/titles",
    name: "Titles",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "titles" */ "../views/TitlesWrapper.vue")
  },
  {
    path: "/colors",
    name: "Colors",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "colors" */ "../views/ColorsWrapper.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;