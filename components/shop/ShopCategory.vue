<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Shop extends Vue {
  @Prop(String) name: string
}
</script>
