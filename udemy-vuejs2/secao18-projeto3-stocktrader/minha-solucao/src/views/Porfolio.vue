<template>
  <v-row>
    <Stock v-for="stock in portfolio" :key="stock.name" :stock="stock" action="sell" />
  </v-row>
</template>


<script>
import { mapGetters } from "vuex";
import Stock from "@/components/Stock";

export default {
  name: "Portfolio",

  components: { Stock },

  computed: mapGetters({
    portfolio: "getPortfolio",
  })
}
</script>