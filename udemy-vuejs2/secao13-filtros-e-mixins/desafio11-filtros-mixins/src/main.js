import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("contaTamanhoPalavras", function(str) {
	return str.split(" ").map(elm => `${elm} (${elm.length}) `).join("");
});

new Vue({
	render: h => h(App),
}).$mount('#app')
