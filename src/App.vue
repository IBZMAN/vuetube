<template>
  <div id="app" class="font-lato">
    <!-- <youtube-logo /> -->
    <!-- <side-drawer class="basis-1/5"></side-drawer> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import SideDrawer from "./components/SideDrawer.vue";
// import YoutubeLogo from "./components/YoutubeLogo.vue";

export default {
  components: {
    // SideDrawer,
    // YoutubeLogo,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
