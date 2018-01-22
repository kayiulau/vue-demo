import Vue from 'vue'
import App from './App.vue'
import q from 'q'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Login from  './Login.vue'
import View from  './View.vue'


var MyPlugin = {
    install: function (Vue, options) {
        Vue.prototype.$ajax = function (url, data) {
            if (window.global != null && window.global.mockStatus == true) {
                var defer = q.defer();
                setTimeout(function() {
                    var rs = window.global[url];
                    if (rs instanceof Function) {
                        var result = rs(data);
                        if (result == null) {
                            defer.reject({});
                        } else {
                            defer.resolve(result);
                        }

                    } else {
                        defer.resolve(data);
                    }
                }, 1000);

                return defer.promise;
            } else {
                return axios.get(url, data);
            }

        };
    }
};

Vue.use(MyPlugin);
Vue.use(ElementUi);
var router = new VueRouter({
    routes: [
        {
        name: "home",
        path: "/home/:a",
        component: Home
        },
        {
        name: "login",
        path: "",
        component: Login
        },
        {
        name: "view",
        path: "/view",
        component: View
        }]
});
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router: router,
    //render: h => h(App)
    render: function (h) {
        return h(App);
    }
})
