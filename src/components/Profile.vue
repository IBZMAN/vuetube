<template>
  <div
    class="grid max-w-full grid-flow-row grid-cols-2 gap-10 place-self-center py-8 sm:grid-cols-3 lg:grid-cols-4"
  >
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="profile-animate group translate-y-[100vh] cursor-pointer self-center"
    >
      <button
        class="profile-animate opacity-0 drop-shadow-4xl"
        @click="selectProfile(index)"
      >
        <img
          class="mb-5 h-24 w-24 rounded-full object-cover ring-7 ring-[#393638] transition-all ease-in group-hover:scale-110 group-hover:ring-[#E70000] sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-44 xl:w-44 2xl:h-52 2xl:w-52"
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
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "ProfileComponent",
  props: ["profiles"],
  data: () => ({ profileClicked: false }),
  methods: {
    go() {
      const tl = anime.timeline({ easing: "easeOutExpo", duration: 2000 });

      tl.add({
        targets: ".profile-animate",
        opacity: 1,
        translateY: "1vh",
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
        targets: `.profile-animate:nth-child(${index + 1})`,
        opacity: 0,
        translateY: 150,
        delay: anime.stagger(150),
      });

      tl.add({
        targets: ".profile-animate",
        opacity: 0,
        translateY: 150,
      });

      this.$emit("profileSelected", true);

      // setTimeout(() => {
      //   this.$router.push("/home");
      // }, 1000);
    },
  },
  mounted() {
    this.go();
    this.animateProfileText();
  },
};
</script>

<style></style>
