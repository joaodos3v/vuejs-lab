<template>
  <v-row>
    <Stock v-for="stock in stocks" :key="stock.name" :stock="stock" action="buy" />
  </v-row>
</template>


<script>
import { mapGetters } from 'vuex';
import Stock from "@/components/Stock";

export default {
  name: "Stocks",

  components: { Stock },
  
  computed: mapGetters({
    stocks: "getStocks",
  }),
}
</script>
