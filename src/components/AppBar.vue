<template>
  <v-card color="grey lighten-4" flat tile>
    <v-app-bar fixed flat clipped-left app height="56">
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="mx-2">
        <v-img src="@/assets/svgs/youtube-icon.svg" />
      </v-toolbar-title>

      <Searchbar class="mx-auto" />

      <CustomButton class="mx-2">
        <IconButton icon="mdi-video-plus-outline" />
      </CustomButton>

      <CustomButton class="mx-2">
        <IconButton icon="mdi-bell-outline" />
      </CustomButton>

      <CustomButton class="mx-2">
        <AvatarButton
          :size="35"
          avatar="https://yt3.ggpht.com/yti/AJo0G0mSGUgjYw6D4-ZVyxCwp3SVDzLPSE-h1nXa88Ie=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </CustomButton>
    </v-app-bar>
  </v-card>
</template>

<script>
import Searchbar from "@/components/Searchbar.vue";
import CustomButton from "./CustomButton.vue";
import IconButton from "./IconButton.vue";
import AvatarButton from "./AvatarButton.vue";
export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;

      this.$emit("toggleDrawer", this.isDrawerOpen);
    },
  },
  created() {},
  components: { Searchbar, CustomButton, IconButton, AvatarButton },
};
</script>
