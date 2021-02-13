import Vue from "vue";

import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import store from "./store";

Vue.use(require("vue-moment"));

// Import Bootstrap
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// Import Datepicker
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

import i18n from "./i18n";

// import vee validate
import * as VeeValidate from "vee-validate";
Vue.use(VeeValidate);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
          router,
          i18n,
          store,
          render: (h) => h(App),
}).$mount("#app");
