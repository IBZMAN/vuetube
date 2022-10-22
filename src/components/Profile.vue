<template>
  <div
    class="grid grid-cols-2 place-items-center gap-10 place-self-center sm:grid-cols-3 lg:grid-cols-4"
  >
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="profile-animate group"
    >
      <button
        class="profile-animate btn opacity-0 drop-shadow-4xl"
        @click="
          getManageProfilesClicked
            ? deleteProfile(profile)
            : selectProfile(index, profile)
        "
        @mouseover="setCurrentHoverItem(index)"
        @mouseout="setCurrentHoverItem(null)"
      >
        <div>
          <img
            class="mb-8 h-24 w-24 rounded-full object-cover ring-7 ring-[#393638] transition-all ease-in group-hover:scale-110 group-hover:ring-red-primary sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-44 xl:w-44 2xl:h-52 2xl:w-52"
            :src="profile.url"
            :alt="profile.name"
            :draggable="false"
          />

          <span
            class="profile-text text-xl font-light capitalize text-gray-300 opacity-0 transition-all ease-in group-hover:font-bold"
            >{{ profile.name }}</span
          >
        </div>

        <DeleteProfile
          customClass="animate-pulse"
          :index="index"
          v-if="getManageProfilesClicked"
        />
      </button>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Swal from "sweetalert2";
import DeleteProfile from "./DeleteProfile.vue";
// import Alert from "./Alert.vue";

export default {
  name: "ProfileComponent",
  props: ["profiles"],
  data: () => ({
    //
  }),
  computed: {
    getManageProfilesClicked() {
      return this.$store.getters.getManageProfilesClicked;
    },
  },
  methods: {
    fire() {
      Swal.fire({
        template: "#my-template",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    setCurrentHoverItem(index) {
      this.$store.dispatch("setValueToStore", {
        value: index,
        mutation: "UPDATE_CURRENT_HOVER_ITEM",
      });
    },
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
    selectProfile(index, selectedProfile) {
      this.profileClicked = true;
      const tl = anime.timeline({ easing: "easeInOutCirc", duration: 250 });
      [0.8, 1].forEach((value) => {
        tl.add({
          targets: `.profile-animate:nth-child(${index + 1})`,
          scale: value,
        });
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
      this.$store.dispatch("setProfileClicked", true);
      this.$store.dispatch("setValueToStore", {
        value: selectedProfile,
        mutation: "UPDATE_SELECTED_PROFILE",
      });
      setTimeout(() => {
        this.$router.push("/home");
      }, 1500);
    },
    deleteProfile(profile) {
      console.log("deleting profile: ", profile);
      this.fire(profile);
    },
  },
  mounted() {
    this.go();
    this.animateProfileText();
  },
  components: { DeleteProfile },
};
</script>

<style scoped>
.btn {
  display: grid;
  gap: 1.5rem;
  grid-template-rows: auto 100px;
}

* {
  text-align: -webkit-center;
}
</style>
