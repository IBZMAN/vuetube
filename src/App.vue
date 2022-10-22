<template>
  <div id="app" class="grid-custom min-h-screen font-poppins">
    <AppBar class="z-[999] row-start-1" />

    <router-view class="row-start-2"></router-view>

    <!-- <manage-profiles /> -->

    <div v-if="currentRoute !== '/'">
      <!-- <div
        class="vignette absolute -z-10 row-span-full row-start-2 min-h-screen min-w-full"
      ></div> -->
      <div class="x absolute -z-20 row-span-full min-h-screen min-w-full"></div>

      <!-- <img
        :src="image"
        alt="s"
        class="bg absolute -z-30 h-[100%] w-[100%] object-cover"
      /> -->
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
// import ManageProfiles from "./components/ManageProfiles.vue";

export default {
  components: {
    AppBar,
    // ManageProfiles,
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  data: () => ({
    image:
      "https://i.pinimg.com/originals/4b/bc/f8/4bbcf869304dbee8be4a0b919412a5c9.jpg",
  }),
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.grid-custom {
  display: grid;

  grid-template-rows: 100px auto;
}

.vignette {
  box-shadow: inset 0 0 200px 10px black;
}

.x {
  background: linear-gradient(to right, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0));
  opacity: 0.75;
}
.bg {
  object-position: 50% 70%;
}
</style>
