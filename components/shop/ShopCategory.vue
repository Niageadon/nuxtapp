<template>
  <v-card class="ma-2">
    <v-card-title>{{ name }}</v-card-title>
    <v-card-text>
      <product-item
        v-for="item in itemList"
        :key="'product-item-' + item.id"
        :item="item"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ProductItem from './ProductItem.vue'
import { Goods } from '~/models'

@Component({
  components: {
    ProductItem,
  },
})
export default class ShopCategory extends Vue {
  @Prop(String) name: string
  @Prop(Array) itemList: Goods[]
}
</script>
