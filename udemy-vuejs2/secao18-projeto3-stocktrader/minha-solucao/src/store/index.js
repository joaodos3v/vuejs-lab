import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: 10000,
    stockPortfolio: [],
    stocks: [
      { id: 1, name: "BMW", price: 110 },
      { id: 2, name: "Google", price: 200 },
      { id: 3, name: "Apple", price: 250 },
      { id: 4, name: "Twitter", price: 12 },
    ]
  },

  getters: {
    getFunds(state) {
      return state.funds;
    },
    getStocks(state) {
      return state.stocks;
    },
    getPortfolio(state) {
      return state.stockPortfolio;
    },
  },

  mutations: {
    updateStocksPrice(state, payload) {
      state.stocks.map(stock => {
        const percentage = stock.price < 40 ? 35 : 15;
        const randomPercent = Math.floor(Math.random() * percentage) + 1;
        const add = randomPercent % 2 == 0 ? true : false;
        const difference = Math.round(stock.price * randomPercent / 100);
        stock.price = add ? stock.price + difference : stock.price - difference;

        let stockFromPortfolio = state.stockPortfolio.find(s => s.id == stock.id);
        if (stockFromPortfolio) {
          stockFromPortfolio.price = stock.price;
        }
      });
    },
    addActionToPortfolio(state, payload) {
      let exists = false;
      this.state.stockPortfolio.map(stock => {
        if (stock.id === payload.stockId) {
          exists = true;
          stock.price = payload.price;
          stock.quantity += payload.quantity;
        }
      });

      if (!exists) {
        const {stockId, name, price, quantity} = payload;
        state.stockPortfolio.push({ id: stockId, name, price, quantity });
      }

      this.state.funds -= payload.totalPrice;
    },
    removeActionFromPortfolio(state, payload) {
      let stockIndex = state.stockPortfolio.findIndex(s => s.id === payload.stockId);
      const stock = state.stockPortfolio[stockIndex];
      if (stock.quantity == payload.quantity) {
        state.stockPortfolio.splice(stockIndex, 1);
      } else {
        state.stockPortfolio[stockIndex].quantity -= payload.quantity;
      }
      state.funds += payload.totalPrice;
    },
    updateStore(state, payload) {
      state.funds = payload.funds;
      state.stockPortfolio = payload.stockPortfolio;
      state.stocks = payload.stocks;
    }
  },

  actions: {
    endDay({ commit }, payload) {
      commit("updateStocksPrice", payload);
    },
    buyAction({ commit }, payload) {
      if (this.state.funds >= payload.totalPrice) {
        commit("addActionToPortfolio", payload);
      } else {
        alert("Você não possui saldo suficiente para efetivar essa compra!");
      }
    },
    sellAction({ commit }, payload) {
      const stock = this.state.stockPortfolio.find(s => s.id === payload.stockId);
      if (stock.quantity >= payload.quantity) {
        commit("removeActionFromPortfolio", payload);
      } else {
        alert(`Você não possui ${payload.quantity} ações para vender. Quantia atual: ${stock.quantity}`);
      }
    },
    loadFromFirebase({ commit }, payload) {
      commit("updateStore", payload);
    }
  },

  modules: {
  }
})
