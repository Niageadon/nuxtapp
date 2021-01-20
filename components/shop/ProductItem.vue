<template>
  <v-row class="product-item">
    <v-col cols="9">{{ item.name }}({{ item.inStock }})</v-col>
    <v-col cols="3">
      {{ item.priceInUsd }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Goods } from '~/models'

@Component
export default class ProductItem extends Vue {
  @Prop(Object) item: Goods
}
</script>
<style>

</style>
