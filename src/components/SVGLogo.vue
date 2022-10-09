<template>
  <div class="min-w-full">
    <img
      src="../assets/svgs/Netflix-Logo.wine.svg"
      alt="netflix-logo"
      class="test h-22 w-36"
      :class="{
        localDoAnimation:
          'left-1/2 translate-x-1/2 transition-all duration-700 ease-in-out hover:-translate-x-0',
      }"
    />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "SVGLogo",
  props: ["doAnimation"],
  computed: {
    localDoAnimation() {
      return this.doAnimation;
    },
  },
  watch: {
    doAnimation: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler() {
        this.go();
      },
    },
  },
  methods: {
    go() {
      const tl = anime.timeline({ easing: "easeOutExpo", duration: 2000 });

      tl.add({
        targets: ".test",
        translateX: "50%",
      });
    },
  },
};
</script>

<style></style>
