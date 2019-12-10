import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "https://curso-vuejs2-udemy.firebaseio.com/";

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios;
    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vuejs2-udemy.firebaseio.com/"
    });

    Vue.prototype.$http.interceptors.request.use(request => {
      window.console.log(request.method);
      // if (request.method == "post") {
      //   request.method = "put";
      // }
      return request;
    });
  }
})