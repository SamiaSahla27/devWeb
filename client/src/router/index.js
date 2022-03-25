import Vue from "vue";
import Router from "vue-router";
import helloWorld from "@/components/helloWorld";
import MyRegister from "@/components/MyRegister";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: helloWorld,
    },
    {
      path: "/register",
      name: "register",
      component: MyRegister,
    },
  ],
});
