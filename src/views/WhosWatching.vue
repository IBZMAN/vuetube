<template>
  <div
    class="flex min-h-screen grow flex-col items-center justify-between overflow-hidden bg-[#161416]"
  >
    <div class="-mt-5">
      <img
        src="../assets/svgs/youtube-icon.svg"
        alt="youtube-logo"
        class="h-28 w-28"
      />
    </div>

    <div class="-mt-16">
      <h1 class="text-6xl font-semibold text-white">
        Who's Watching<span class="text-[#E70000]">?</span>
      </h1>
    </div>

    <!-- AVATARS -->
    <div class="flex justify-around">
      <button
        class="profile-animate group relative mx-9 flex translate-y-[100vh] flex-col items-center gap-5 opacity-0 drop-shadow-2xl"
        ref="profiles"
        v-for="(profile, index) in profiles"
        :key="index"
        @click="selectProfile(index)"
      >
        <img
          class="h-20 w-20 rounded-full object-cover ring-7 ring-[#393638] transition-all ease-in group-hover:scale-110 group-hover:ring-[#E70000] sm:h-24 sm:w-24 md:h-36 md:w-36 lg:h-52 lg:w-52"
          :src="profile.url"
          :alt="profile.name"
          :draggable="false"
        />

        <span
          class="profile-text text-xl font-light capitalize text-gray-300 opacity-0 transition-all ease-in group-hover:font-bold"
          >{{ profile.name }}</span
        >
      </button>
    </div>

    <footer class="w-3/5 cursor-pointer justify-end bg-[#E70000] p-10">
      <span class="font-semibold uppercase text-white">manage profiles</span>
    </footer>
  </div>
</template>

<script>
import anime from "animejs";

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
    profileClicked: false,
  }),
  mounted() {
    this.go();
    this.animateProfileText();
  },
  methods: {
    go() {
      const tl = anime.timeline({ easing: "easeOutExpo", duration: 2000 });

      tl.add({
        targets: ".profile-animate",
        opacity: 1,
        translateY: -50,
        delay: anime.stagger(150),
      });
    },

    animateProfileText() {
      const tl = anime.timeline({ easing: "easeOutExpo", duration: 1500 });

      tl.add({
        targets: ".profile-text",
        opacity: 1,
        delay: anime.stagger(150),
      });
    },

    selectProfile(index) {
      this.profileClicked = true;

      const tl = anime.timeline({ easing: "easeInOutCirc", duration: 250 });

      tl.add({
        targets: `.profile-animate:nth-child(${index + 1})`,
        scale: 0.8,
      });

      tl.add({
        targets: `.profile-animate:nth-child(${index + 1})`,
        scale: 1,
      });

      tl.add({
        targets: ".profile-animate",
        opacity: 0,
        translateY: 150,
        delay: anime.stagger(150),
      });

      setTimeout(() => {
        this.$router.push("/home");
      }, 1000);
    },
  },
};
</script>

<style></style>
