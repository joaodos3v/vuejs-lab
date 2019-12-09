import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
	return valor.split("").reverse().join("");
});

Vue.mixin({
  data() {
    return {
      global: "Estou no Mixin Global!",
    };
  },
	created() {
		window.console.log("Created - Mixin Global!");
	}
})

new Vue({
  render: h => h(App),
  created() {
		window.console.log("Created - Vue Instance");
	}
}).$mount('#app')
