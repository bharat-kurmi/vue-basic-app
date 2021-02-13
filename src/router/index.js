import Vue from "vue";
import VueRouter from "vue-router";

import Appointment from "../views/Appointment.vue";
import Prospect from "../views/Prospect.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";


Vue.use(VueRouter)

const routes = [
          {
                    path: "/appointment/:uuid",
                    name: "Appointment",
                    component: Appointment,
          },
          {
                    path: "/prospect/:uuid",
                    name: "Prospect",
                    component: Prospect,
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
          },
          {
                    path: "/",
                    name: "home",
                    component: Home,
          },
          {
                    path: "/login",
                    name: "login",
                    component: Login,
          },
          {
                    path: "/register",
                    name: "register",
                    component: Register,
          },
];

const router = new VueRouter({
          mode: "history",
          base: "/",
          routes,
});

export default router
