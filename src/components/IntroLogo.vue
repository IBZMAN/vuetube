<template>
  <v-container>
    <div
      class="main starting-zoom"
      @click="activateAnimateZoomOut"
      :class="{ 'animate-zoom': zoomOutActive, 'd-none': hideLogo }"
    >
      <img src="@/assets/svgs/icon-for-animation/youtube-icon.svg" />
      <img src="@/assets/svgs/icon-for-animation/play.svg" class="play-icon" />
      <img
        class="animate-ping play-icon"
        src="@/assets/svgs/icon-for-animation/play.svg"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    zoomOutActive: false,
    hideLogo: false,
  }),

  methods: {
    activateAnimateZoomOut() {
      this.zoomOutActive = true;

      //   setTimeout(() => {
      //     this.hideLogo = true;
      //     this.$emit(true);
      //   }, 450);
    },
  },
};
</script>

<style scoped lang="scss">
.play-icon {
  position: absolute;
  top: 0;
}

@keyframes zoom {
  0% {
    transform: scale(2000);
    transform: rotateX("180");
  }
  50% {
    transform: scale(100);
    transform: rotateX("180");
  }
  100% {
    transform: scale(200);
    transform: rotateX("180");
  }
}

@keyframes starting {
  0% {
    transform: scale(20);
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-zoom {
  animation: zoom 1s ease forwards;
}

.starting-zoom {
  animation: starting 1s ease forwards;
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: 1.3s;
}

.main {
  transform: scale(0.5);
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
</style>
