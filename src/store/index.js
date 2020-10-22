import Vuex from "vuex";

import home from "./home.module";
import auth from "./auth.module";
import article from "./article.module";
import profile from "./profile.module";

// v2 syntax
// Vue.use(Vuex);
// export default new Vuex.Store({
//   modules: { ... }
// });

export default Vuex.createStore({
  modules: {
    home,
    auth,
    article,
    profile
  }
});
