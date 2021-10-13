import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo";
import Posts from "../views/Posts";
import Users from "../views/Users";
import User from "../views/User";
import UserPosts from "../views/UserPosts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    //posts
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user/:userId",
    name: "User",
    component: User,
  },
  {
    path: "/userPosts",
    name: "UserPosts",
    component: UserPosts,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
