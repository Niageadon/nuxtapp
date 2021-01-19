<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <shop :items="goods" />
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

@Component({
  components: {
    UserCart,
    Shop,
  },
})
export default class MainPage extends Vue {
  goods = DataService.getAll()
  usdCourse: number = Math.random()
  created() {
    setInterval(() => {
      this.usdCourse = Math.random()
    }, 15000)
  }
}
</script>
