<template>
  <div class="grid min-h-screen grid-flow-row overflow-hidden bg-[#161416]">
    <display-header>
      Who's Watching<span class="text-[#E70000]">?</span>
    </display-header>

    <profile :profiles="profiles" />

    <manage-profiles />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import DisplayHeader from "../components/DisplayHeader.vue";
import ManageProfiles from "../components/ManageProfiles.vue";

export default {
  data: () => ({
    profiles: [
      {
        url: "https://comicbookmovie.com/images/articles/banners/197200.jpeg",
        name: "superman",
      },
      {
        url: "https://media.gq-magazine.co.uk/photos/62e3a869462bbdd05e0f7ea3/master/pass/Batfleck_0000_MCDJULE_EC046.jpg",
        name: "batman",
      },
      {
        url: "https://cdn.vox-cdn.com/thumbor/dYEb037RiYPNafoLz9oY8Odq-B8=/0x0:1280x640/1400x788/filters:focal(467x58:671x262):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55115279/wonderwoman2.0.jpg",
        name: "wonderwoman",
      },
      {
        url: "https://resizing.flixster.com/6vjNFEwES1pWrRD0jf6edfBa2ME=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/447/583/thumb_A3F39ACC-AC58-46D8-906B-F7ABE7C664DE.jpg",
        name: "aquaman",
      },
    ],
  }),
  components: { Profile, DisplayHeader, ManageProfiles },
  mounted() {},
  methods: {},
};
</script>

<style></style>
