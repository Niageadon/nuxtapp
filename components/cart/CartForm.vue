<template>
  <v-row class="justify-end">
    <v-col cols="6">
      <usd-course-widget :value.sync="usdCourse" />
    </v-col>
    <v-col cols="12">
      <v-data-table
        dense
        hide-default-footer
        :headers="headers"
        :items="model"
        class="elevation-1"
      >
        <template #body="{ items }">
          <tr v-for="item in items" :key="item.id">
            <td class="text-end">{{ item.name }}</td>
            <td class="text-end">
              <v-text-field
                type="number"
                v-model.number="item.count"
              ></v-text-field>
            </td>
            <td class="text-end">{{ calcPrice(item.priceInUsd) }}</td>
            <td class="text-end">biba</td>
          </tr>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'
import { Goods } from '@/models'
import UsdCourseWidget from './UsdCourseWidget.vue'

@Component({
  components: {
    UsdCourseWidget,
  },
})
export default class CartForm extends Vue {
  @PropSync('value', Array) model: Goods[]
  usdCourse: number = Infinity
  headers = [
    {
      text: 'Наименование товара и описание',
      sortable: false,
      value: 'name',
    },
    {
      text: 'К-во',
      sortable: false,
      value: 'count',
      width: 70,
    },
    {
      text: 'Цена',
      sortable: false,
      value: 'priceInUsd',
    },
    {
      sortable: false,
    },
  ]

  get items() {
    return this.model.map(el => ({}))
  }

  calcPrice(usdPrice: number) {
    return Math.ceil(usdPrice * this.usdCourse)
  }
}
</script>
