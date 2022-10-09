<template>
  <div id="app" class="grid-rows-8 grid min-h-screen overflow-hidden font-lato">
    <SVGLogo class="row-span-auto" :doAnimation="this.doAnimation" />
    <!-- <side-drawer class="basis-1/5"></side-drawer> -->

    <router-view
      class="row-span-5"
      @profileSelected="handleProfileSelected"
    ></router-view>
  </div>
</template>

<script>
import SVGLogo from "./components/SVGLogo.vue";

export default {
  components: {
    SVGLogo,
  },

  data: () => ({ doAnimation: false }),

  methods: {
    handleProfileSelected(value) {
      this.doAnimation = value;
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
