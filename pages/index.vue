<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <shop :items="goods" @add-to-cart="addToCart" />
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <cart-form :value.sync="cart" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { DataService } from '@/services'
import { CartForm, Shop } from '@/components'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Goods } from '../models'

@Component({
  components: {
    CartForm,
    Shop,
  },
})
export default class MainPage extends Vue {
  goods: Goods[] = []
  cart: Goods[] = []
  async created() {
    this.goods = await DataService.getAll()
  }

  addToCart(item: Goods) {
    if (this.cart.includes(item)) {
      const itemIndex = this.cart.findIndex((el) => el.id === item.id)
      item.count++
      this.cart.splice(itemIndex, 1, item)
    } else {
      item.count = 1
      this.cart.push(item)
    }
  }
}
</script>
