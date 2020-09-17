import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "../public/reset.css";
import Axios from "axios";
import Homepage from "./Homepage.vue";
import SearchPage from "./SearchPage.vue";
import Option from "./Option.vue";
import AnotherOption from "./AnotherOption.vue";
import MoreAnime from "./MoreAnime.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Homepage },
  { path: "/search", component: SearchPage },
  { path: "/option", component: Option },
  { path: "/another_option", component: AnotherOption },
  { path: "/browse_anime", component: MoreAnime }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
