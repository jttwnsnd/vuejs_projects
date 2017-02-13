<template lang="html">
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>( Bought Price: {{ stock.boughtPrice }} | Current Price: {{ stock.price }} | Quantity: {{ stock.quantity}} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            class="form-control"
            type="number"
            v-model="quantity"
            :class="{sell: selling}"
            placeholder="Quantity">
        </div>
        <div class="pull-right">
          <button
            type="button"
            name="button"
            class="btn btn-primary"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
            >{{ insufficientQuantity ? 'Not Enough' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: ['stock'],
  data(){
    return{
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
    selling(){
      return this.stock.boughtPrice < this.stock.price;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="css" scoped>

.sell{
  border: 1px solid lightgreen;
}
</style>
