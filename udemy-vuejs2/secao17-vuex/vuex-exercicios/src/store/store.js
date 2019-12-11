import Vue from "vue";
import Vuex from "vuex";

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";

import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nome: "Maria",
    sobrenome: "Silva",
  },
  
  /** Se não existirem outros getters globais, pode utilizar exatamente como abaixo */
  // getters,

  /** Caso já exista alguns, utiliza o spread */
  getters: {
    ...getters,
  },

  modules: { carrinho, parametros },
});