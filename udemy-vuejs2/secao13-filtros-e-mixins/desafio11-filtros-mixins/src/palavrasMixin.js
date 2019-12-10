export default {
  computed: {
		cpTrocaEspacoPorVirgula() {
			return this.str1.replace(/ /g, ",");
		},
		cpContaTamanhoPalavras() {
			return this.str2.split(" ").map(elm => `${elm} (${elm.length}) `).join("");
		}
	},
}