<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <shop :items="goods" @add-to-cart="addToCart" />
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <user-cart :model="goods" :convert-course="usdCourse" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { DataService } from '@/services'
import { UserCart, Shop } from '@/components'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Goods } from '../models'

@Component({
  components: {
    UserCart,
    Shop,
  },
})
export default class MainPage extends Vue {
  goods: Goods[] = []
  usdCourse: number = Math.random()
  async created() {
    this.goods = await DataService.getAll()
    setInterval(() => {
      this.usdCourse = Math.random()
    }, 15000)
  }

  addToCart(v: Goods) {
    console.log(1111, v)
  }
}
</script>
