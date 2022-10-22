<template>
  <div
    class="poster-animate h-auto opacity-0 drop-shadow-3xl transition-all duration-500 ease-in-out will-change-transform hover:brightness-[.6]"
  >
    <button class="group">
      <img :src="poster" alt="poster" />
    </button>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "PosterComponent",
  props: ["item"],
  methods: {
    go() {
      const tl = anime.timeline({ easing: "easeOutExpo", duration: 1000 });
      tl.add({
        targets: ".poster-animate",
        opacity: 1,
        translateY: "1vh",
        delay: anime.stagger(150),
      });
    },
  },
  computed: {
    poster() {
      return `https://image.tmdb.org/t/p/original/${this.item.poster_path}`;
    },
  },
  mounted() {
    this.go();
  },
};
</script>

<style></style>
