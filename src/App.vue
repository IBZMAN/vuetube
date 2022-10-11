<template>
  <div
    id="app"
    class="font-poppins grid min-h-screen grid-rows-8 overflow-hidden"
  >
    <AppBar />

    <transition name="fade">
      <router-view class="row-span-7"></router-view>
    </transition>
  </div>
</template>

<script>
// import SVGLogo from "./components/SVGLogo.vue";
import AppBar from "./components/AppBar.vue";

export default {
  components: {
    // SVGLogo,
    AppBar,
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
