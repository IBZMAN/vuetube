<template>
  <div class="custom-grid grid content-start">
    <display-header>
      Who's Watching<span class="text-red-primary">?</span>
    </display-header>

    <profile :profiles="getProfiles" />

    <manage-profiles />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import DisplayHeader from "../components/DisplayHeader.vue";
import ManageProfiles from "../components/ManageProfiles.vue";
import profiles from "../data/profiles.json";

export default {
  computed: {
    getProfiles() {
      return profiles;
    },
  },
  components: { Profile, DisplayHeader, ManageProfiles },
  created() {},
};
</script>

<style scoped>
.custom-grid {
  grid-template-rows: auto 60% auto;
}
</style>
