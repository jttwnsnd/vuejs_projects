<template lang="html">
    <div>
      <app-stock v-for="stock in stocks" :stock="stock" key="stock.id"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css">
</style>
