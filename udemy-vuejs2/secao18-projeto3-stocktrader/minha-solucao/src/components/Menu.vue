<template>
  <v-app-bar app color="grey lighten-5">
    <v-toolbar-title class="headline">
      <span class="font-weight-bold">STOCK</span>TRADER
    </v-toolbar-title>
    <div class="d-flex ml-3">
      <router-link to="/" tag="li" exact active-class="active-button">
        <v-btn text large>INÍCIO</v-btn>
      </router-link>
      <router-link to="/portfolio" tag="li" active-class="active-button">
        <v-btn text large>PORTFÓLIO</v-btn>
      </router-link>
      <router-link to="/stocks" tag="li" active-class="active-button">
        <v-btn text large>AÇÕES</v-btn>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn text large @click="endDay">FINALIZAR DIA</v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text large v-on="on">SALVAR & CARREGAR</v-btn>
      </template>
      <v-list>
       <v-list-item v-for="option in options" :key="option.title" @click="synchronize(option.action)">
          <v-list-item-title>{{ option.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <span class="subtitle-2 font-weight-light">SALDO: {{ funds | currency }}</span>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Menu',

  computed: mapGetters({
    funds: "getFunds",
    stockPortfolio: "getPortfolio",
    stocks: "getStocks"
  }),

  data: () => ({
    options: [
      { title: "Salvar Dados", action: "export" },
      { title: "Carregar Dados", action: "import" },
    ],
  }),

  methods: {
    ...mapActions(["endDay", "loadFromFirebase"]),

    synchronize(action) {
      if (action === "export") {
        this.saveData();
      } else {
        this.getData(true);
      }
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this;
      const firebaseData = this.getData(false);
      const method = firebaseData ? "put" : "post";
      const finalURL = firebaseData ? `/${Object.keys(firebaseData.data)[0]}.json` : ".json";
      
      this.$http[method](`data${finalURL}`, {funds, stockPortfolio, stocks})
        .then((result) => {
          window.console.log("Dados salvos com sucesso!", result);
        }).catch((err) => {
          window.console.log("Ocorreu um erro ao salvar os dados!", err);
        });

    },
    getData(update = false) {
      this.$http.get("data.json")
        .then((result) => {
          if (result.data) {
            if (update) {
              const firstKey = Object.keys(result.data)[0];
              this.loadFromFirebase(result.data[firstKey]);
            } else {
              return result.data;
            }
          }
          return null;
        }).catch((err) => {
          window.console.log("Ocorreu um erro ao capturar os dados!", err);
          return null;
        });
    }
  },

};
</script>
