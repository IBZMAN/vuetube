<template>
  <div class="grid min-h-screen grid-flow-row overflow-hidden bg-[#161416]">
    <display-header>
      Who's Watching<span class="text-[#E70000]">?</span>
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

<style></style>
