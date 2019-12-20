<template>
  <v-col cols="4">
    <v-card outlined light>
      <v-card-title :class="cardTitleColor">
        <span class="font-weight-bold headline mr-3">{{ stock.name }}</span>
        <span class="subtitle-1">
          (Preço: {{ stock.price | currency }} <span v-if="action == 'sell'">| Qtde: {{ stock.quantity }}</span>)
        </span>
      </v-card-title>
      <v-card-text>
        <v-row class="align-center">
          <v-col cols="8">
            <v-text-field label="Quantidade" type="number" v-model.number="quantity"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn v-if="action == 'sell'" @click="sell(stock.id)" :disabled="quantity <= 0 || quantity > stock.quantity" 
              depressed :color="buttonColor" style="color: white;">
              {{ quantity > stock.quantity ? "INSUFICIENTE" : "VENDER" }}
            </v-btn>
            <v-btn v-else @click="buy(stock.id)" :disabled="quantity <= 0" depressed :color="buttonColor" style="color: white;">
              COMPRAR
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Stock",

  props: {
    stock: {
      type: Object,
      required: true
    },
    action: {
      type: String,
      required: true
    },
  },

  computed: {
    cardTitleColor() {
      return this.action == "sell" ? "card-title-info" : "card-title";
    },
    buttonColor() {
      return this.action == "sell" ? "light-blue darken-3" : "light-green darken-3";
    },
  },

  data: () => ({
    quantity: 0,
  }),

  methods: {
    ...mapActions(["buyAction", "sellAction"]),

    buy(stockId) {
      const { name, price } = this.stock;
      this.buyAction({ stockId, price, name, quantity: this.quantity, totalPrice: price * this.quantity });
      this.quantity = 0;
    },
    sell(stockId) {
      const { name, price } = this.stock;
      this.sellAction({ stockId, price, quantity: this.quantity, totalPrice: price * this.quantity });
      this.quantity = 0;
    }
  }
}
</script>