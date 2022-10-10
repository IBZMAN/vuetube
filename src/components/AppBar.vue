<template>
  <div class="appbar-backdrop fixed h-[35%] min-w-full">
    <div
      class="mx-auto grid max-w-[95%] grid-cols-6 items-center drop-shadow-3xl"
    >
      <div :class="[anim ? 'col-start-1' : 'col-span-4 col-start-3']">
        <div class="grid grid-cols-2">
          <SVGLogo class="justify-self-center" />

          <div
            class="-translate-y-[100vh] place-self-center"
            :class="{
              'translate-y-[0vh] transition-all duration-500 ease-in-out': anim,
            }"
          >
            <Browse v-if="currentRoute === '/home'" />
          </div>
        </div>
      </div>

      <div
        class="col-start-6 -translate-y-[100vh] items-center"
        :class="{
          'translate-y-[0vh] transition-all duration-500 ease-in-out': anim,
        }"
      >
        <div v-if="currentRoute === '/home'">
          <div class="flex justify-around">
            <button
              class="text-white transition ease-in-out hover:text-[#E70000]"
            >
              <Search />
            </button>

            <button
              class="ml-3 text-white transition ease-in-out hover:text-[#E70000]"
            >
              <Bell />
            </button>

            <button
              class="group grid cursor-pointer grid-cols-3 items-center text-white"
              @click="test"
            >
              <img
                class="h-7 min-h-full w-7 justify-self-center rounded-full object-cover ring-2 ring-neutral-300 transition-all ease-in group-hover:ring-[#E70000]"
                :draggable="false"
                src="https://comicbookmovie.com/images/articles/banners/197200.jpeg"
                alt="profile_superman"
              />

              <span class="text-sm font-light">Ibraheem</span>
              <ChevronDown class="ml-1 h-4 w-4 justify-self-start" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Bell, ChevronDown } from "lucide-vue";
import SVGLogo from "./SVGLogo.vue";
import Browse from "./Browse.vue";

export default {
  data: () => ({
    anim: false,
    logout: false,
  }),

  mounted() {
    // if (this.currentRoute === "/home") {
    //   // console.log(this.currentRoute);
    //   this.anim = true;
    // }
    // if (this.currentRoute !== "/home") this.anim = false;
  },
  watch: {
    $route() {
      // this.anim = !this.anim;
      if (this.currentRoute === "/home") this.anim = true;
      if (this.currentRoute !== "/home") this.anim = false;
    },
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    profileClicked() {
      return this.$store.getters.getProfileClicked;
    },
  },
  methods: {
    test() {
      this.logout = true;
      this.$store.dispatch("setValueToStore", {
        value: this.logout,
        mutation: "UPDATE_LOGOUT",
      });

      this.$store.dispatch("setValueToStore", {
        value: false,
        mutation: "UPDATE_PROFILE_CLICKED",
      });
      this.$router.push("/");
    },
  },

  components: { SVGLogo, Browse, Search, Bell, ChevronDown },
};
</script>
<style>
.appbar-backdrop {
  background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0));
  backdrop-filter: blur(1px);
}
</style>
