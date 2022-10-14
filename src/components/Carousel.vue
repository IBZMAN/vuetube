<template>
  <carousel :per-page="4" :paginationSize="5" :centerMode="true">
    <slide v-for="(ep, index) in getEpisodes" :key="index">
      <Thumbnail :video="ep" :index="index" />
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
  created() {
    console.log(this.episodes);
  },
  computed: {
    getEpisodes() {
      return this.episodes;
    },
  },

  components: { Thumbnail, Carousel, Slide },
};
</script>

<style lang="scss">
.VueCarousel {
  height: 100%;
}
div.VueCarousel-inner {
  margin-top: 2% !important;
  margin-bottom: 2% !important;
}
</style>
