import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import playground from "../views/playground.vue";
// import forIf from "../views/forIf.vue";
// import listPage from "../views/listPage.vue";
// import Event from "../views/Event.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
    // 해당path의 component를 열기
    children: [{
      path: '/',
      name: 'main',
      component: () => import('../views/main/Main.vue')
    }]
  },
  // {
  //   path: "/play",
  //   // /play가 도메인 주소
  //   name: "play",
  //   component: playground
  //   //component로 연결해주는것.
  // },
  // {
  //   path: "/for",
  //   name: "for",
  //   component: forIf
  //   //상단의 import랑 component의 이름이 같아야함
  // },
  // {
  //   path: "/list",
  //   name: "listPage",
  //   component: listPage
  //   //상단의 import랑 component의 이름이 같아야함
  // },
  // {
  //   path: "/event",
  //   name: "Event",
  //   component: Event
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;