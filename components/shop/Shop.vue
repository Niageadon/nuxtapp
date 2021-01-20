<template>
  <div>
    <shop-category
      v-for="(el, groupId) in groupList"
      :key="`group-` + groupId"
      :name="el.name"
      :item-list="groupItemList(groupId)"
      @add="$emit('add-to-cart', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Goods } from '@/models'
import { GroupService } from '@/services'
import ShopCategory from './ShopCategory.vue'
@Component({
  components: {
    ShopCategory,
  },
})
export default class Shop extends Vue {
  @Prop(Array) items: Goods[]
  get groupList() {
    return Object.fromEntries(
      Object.entries(GroupService.getAll()).filter(([key]) =>
        this.items.map((el) => el.groupId).includes(parseInt(key))
      )
    )
  }

  groupItemList(groupId: string): Goods[] {
    return this.items.filter((el: Goods) => el.groupId === parseInt(groupId))
  }
}
</script>
