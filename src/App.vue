<template>
  <div
    id="app"
    class="grid min-h-screen grid-rows-8 overflow-hidden font-poppins"
  >
    <AppBar />

    <transition name="fade">
      <router-view class="row-span-8"></router-view>
    </transition>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  components: {
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
