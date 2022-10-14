<template>
  <div
    class="md:h-30 h-12 min-w-full self-end justify-self-center drop-shadow-3xl sm:h-28 lg:h-28 xl:h-24"
  >
    <button
      class="min-h-full w-3/4 bg-red-primary md:w-4/6 lg:w-1/2 xl:w-2/3"
      @click="manageProfile"
    >
      <span class="text-lg font-semibold uppercase text-white"
        >manage profiles</span
      >
    </button>
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
