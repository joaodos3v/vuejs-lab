export default {
  namespaced: true,

  state: {
    produtos: [],
  },

  getters: {
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0);
    }
  },

  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    }
  },

  actions: {
    /** Caso desejasse, daria para retornar um objeto com "root: true" e colocar a lógica no "handler" para definir ele com global */
    adicionarProduto({ commit }, payload) {
      setTimeout(() => {
        commit("adicionarProduto", payload)
      }, 1000);
    }
  }

};