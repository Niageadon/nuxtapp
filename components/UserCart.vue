<template>
  <v-data-table
    dense
    :headers="headers"
    :items="items"
    item-key="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Goods } from '~/models'

@Component
export default class UserCart extends Vue {
  @Prop(Array) model: Goods[]
  @Prop(Number) convertCourse: number
  headers = [
    {
      text: 'Наименование товара и описание',
      sortable: false,
      value: 'name',
    },
    {
      text: 'К-во',
      sortable: false,
      value: 'name',
    },
    {
      text: 'Цена',
      sortable: false,
      value: 'priceInUsd',
    },
    {
      sortable: false,
      value: 'name',
    },
  ]

  get items() {
    return this.model.map(el => ({}))
  }
}
</script>
