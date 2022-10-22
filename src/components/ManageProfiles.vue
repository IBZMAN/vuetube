<template>
  <div
    class="fixed w-full self-end drop-shadow-3xl transition-all duration-1000 ease-in-out"
  >
    <div
      class="md:h-30 relative -z-10 mx-auto w-3/4 transition-all duration-1000 ease-in-out sm:h-28 md:w-4/6 lg:h-28 lg:w-1/2 xl:h-24 xl:w-2/3"
    >
      <div
        class="-z-10 h-full w-full bg-red-primary"
        :class="[
          getSelectedProfile
            ? 'scale-x-[1.3] scale-y-[1.5] transition-all delay-500 duration-1000 ease-in-out'
            : 'scale-x-100 scale-y-100  transition-all  duration-1000 ease-in-out',
        ]"
      ></div>
      <button
        v-if="currentRoute === '/'"
        @click="manageProfile"
        class="absolute top-0 left-0 right-0 z-10 h-full w-full opacity-0"
        :class="[
          getSelectedProfile
            ? 'opacity-0 transition-all duration-1000'
            : 'opacity-100  duration-1000',
        ]"
      >
        <span class="text-2xl font-thin uppercase text-white"
          >manage profiles</span
        >
      </button>

      <div
        class="absolute top-0 left-0 z-10 opacity-0"
        v-if="currentRoute !== '/'"
        :class="[
          getSelectedProfile
            ? 'opacity-100 transition-all duration-1000'
            : 'opacity-0  duration-1000',
        ]"
      >
        <span class="text-2xl font-semibold capitalize text-white"
          >new releases</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageProfiles",
  computed: {
    getSelectedProfile() {
      return this.$store.getters.getSelectedProfile;
    },
    getCurrentHoverItem() {
      return this.$store.getters.getCurrentHoverItem;
    },
    getManageProfilesClicked() {
      return this.$store.getters.getManageProfilesClicked;
    },
    logout() {
      return this.$store.getters.getLogout;
    },
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    manageProfile() {
      this.$store.dispatch("setValueToStore", {
        value: !this.getManageProfilesClicked,
        mutation: "UPDATE_MANAGE_PROFILES_CLICKED",
      });

      // this.$store.dispatch("setValueToStore", {
      //   value: true,
      //   mutation: "UPDATE_MANAGE_PROFILES_CLICKED",
      // });
    },
  },
};
</script>

<style></style>
