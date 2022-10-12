<template>
  <carousel :per-page="4" :paginationSize="5" :centerMode="true">
    <slide v-for="(ep, index) in getEpisodes" :key="index">
      <Thumbnail :video="ep" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Thumbnail from "./Thumbnail.vue";

export default {
  name: "CarouselComponent",
  props: ["episodes"],
  data: () => ({}),

  computed: {
    getEpisodes() {
      return this.episodes;
    },
  },

  components: { Thumbnail, Carousel, Slide },
};
</script>

<style lang="scss" scoped>
.wrapper {
  grid-template-columns: repeat(3, 100%);

  section {
    grid-template-columns: repeat(5, auto);
  }
}
</style>
