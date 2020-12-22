import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebaseApp from './firebase'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@ckeditor/ckeditor5-vue2';
import '@ckeditor/ckeditor5-build-classic';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(firebaseApp);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
