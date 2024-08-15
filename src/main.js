import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

var url_params = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    url_params[key] = value;
});

Vue.prototype.$API_TOKEN = url_params.API_TOKEN;
Vue.prototype.$shop = url_params.shop;
Vue.prototype.$plan_name = url_params.plan_name;
Vue.prototype.$backendURL = "https://api.organictravellerstech.com"

//Vue.prototype.$API_TOKEN = "Token%208c7f95186eae625931ace29c2608488263f6015c";
//Vue.prototype.$shop = "ennovagon-app-test.myshopify.com";
//Vue.prototype.$plan_name = "Free";
//Vue.prototype.$backendURL = "https://aaf4-119-156-30-66.ngrok-free.a"
Vue.prototype.$Axios = Axios

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

// Vue.prototype.$Axios.get(Vue.prototype.$backendURL + "/stepper_verification?shop=" + Vue.prototype.$shop, {
//     headers: {
//         'Authorization': Vue.prototype.$API_TOKEN.replace('%20', ' ')
//     }
// }).then((response) => {
//     console.log(response.data)
//     if (response.data.stepper_completion == true) {
//         router.push('/')
//     } else {
//         router.push('/setup')
//     }
// }, (error) => {
//     if (error.response.data.detail == "Session expired, Reopen the application!") {
//         router.push('/error')
//     }
// });
