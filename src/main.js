import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

// v2 syntax
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
const app = createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

// v2 syntax
// Vue.filter("date", DateFilter);
// Vue.filter("error", ErrorFilter);

app.config.globalProperties.$filters = {
  date: DateFilter,
  error: ErrorFilter
};
