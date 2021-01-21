<template>
  <v-card
    class="course"
    :class="{
      'course-growth': hasCourseIncreased === true,
      'course-fall': hasCourseIncreased === false,
    }"
  >
    <v-card-subtitle> Текущий курс: {{ course }} </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, PropSync, Watch } from 'vue-property-decorator'
let interval: NodeJS.Timeout

@Component
export default class UsdCourseWidget extends Vue {
  @PropSync('value', Number) course: number
  hasCourseIncreased: boolean = null
  @Watch('course')
  onCourseChange(val: number, oldVal: number) {
    this.hasCourseIncreased = val > oldVal
    setTimeout(() => {
      this.hasCourseIncreased = null
    }, 1000)
  }

  created() {
    this.course = Math.random()
    interval = setInterval(() => {
      this.course = Math.random()
    }, 3000)
  }

  beforeDestroy() {
    clearInterval(interval)
  }
}
</script>
<style scoped>
.course {
  transition: background-color 0.5s ease-out;
}
.course-growth {
  background-color: #0b660b;
}
.course-fall {
  background-color: #753131;
}
</style>
