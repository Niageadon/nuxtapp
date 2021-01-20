<template>
  <v-row class="product-item">
    <v-col cols="7">{{ item.name }} ({{ item.inStock }})</v-col>
    <v-col cols="3">
      {{ item.priceInUsd }}
    </v-col>
    <v-col cols="2">
      <v-btn
        @click="$emit('add')"
        class="mx-2"
        fab
        small
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
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
