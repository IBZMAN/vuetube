<template>
  <div class="max-w-full">
    <img
      src="../assets/svgs/Netflix-Logo.wine.svg"
      alt="netflix-logo"
      class="h-22 w-36"
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
    profileClicked() {
      return this.$store.getters.getProfileClicked;
    },
  },
  watch: {
    doAnimation: {
      immediate: true,
      handler() {
        //
      },
    },
  },
  methods: {
    go() {
      const tl = anime.timeline({ easing: "easeOutExpo", duration: 2000 });

      tl.add({
        targets: ".test",
        translateX: "500%",
      });
    },
  },
};
</script>

<style></style>
