<template>
  <div class="custom-grid">
    <div
      class="bg absolute top-0 -z-[999] h-[100%] w-[100%] object-cover opacity-0 transition-all duration-1000 ease-linear"
      :class="{
        'opacity-100 transition-all delay-1000 duration-1000 ease-in-out':
          profileClicked,
        'opacity-0 transition-all delay-700 duration-500 ease-in-out': logout,
      }"
    >
      <img :src="image" alt="" />
    </div>

    <div
      class="row-start-2 mx-auto my-auto mt-10 w-[90%] text-start text-white"
    >
      <!-- GENRES -->
      <div class="mb-8 flex justify-start text-neutral-400">
        <button
          class="mr-5 rounded-md px-[.5rem] text-center text-sm uppercase outline outline-1 outline-offset-1 transition-all ease-in-out hover:bg-[#a3a3a3]"
          v-for="(genre, index) in moviesList[0].genre_ids"
          :key="index"
        >
          {{ genre }}
        </button>
      </div>

      <!-- TITLE -->
      <h1
        class="mb-8 font-bold capitalize drop-shadow-2xl md:text-3xl lg:text-[4.5rem]"
      >
        {{ moviesList[0].title }}
      </h1>

      <!-- METADATA (YEAR, LENGTH, AGE ETC.) -->
      <!-- <div class="mb-5 flex justify-start text-white">
        <span class="text-md mr-5">{{ movie.age }}</span>
        <span class="text-md mr-5">{{ movie.year_released }}</span>

        <span class="text-md mr-5">{{ movie.length }} </span>
      </div> -->

      <!-- DESCRIPTION -->
      <div class="mb-5 xl:max-w-xl">
        <p>
          {{ moviesList[0].overview }}
        </p>
      </div>

      <!-- BUTTONS -->
      <div class="flex">
        <button
          class="shadow-[] group flex h-10 w-32 items-center justify-center rounded-lg bg-red-primary transition-all hover:bg-[#cb0000] focus:outline-none focus:ring focus:ring-[#f09f9f]"
        >
          <div class="relative">
            <Play
              :strokeWidth="0"
              fill="#fff"
              class="mr-3 h-6 w-6 transition-all duration-300 ease-in-out"
            />
            <Play
              :strokeWidth="0"
              fill="#fff"
              class="absolute top-0 mr-3 h-6 w-6 transition-all duration-300 ease-in-out group-hover:animate-ping"
            />
          </div>

          <span
            class="text-md font-bold uppercase text-white transition-all duration-300 ease-in-out"
            >watch</span
          >
        </button>

        <button
          class="group mx-6 flex h-10 w-32 items-center justify-center rounded-lg bg-black transition-all ease-in-out hover:bg-zinc-700 focus:outline-none focus:ring focus:ring-red-primary"
        >
          <div class="relative">
            <Plus class="mr-3 h-6 w-6 group-hover:text-black" />
            <Plus
              class="absolute top-0 mr-3 h-6 w-6 group-hover:animate-ping group-hover:text-black"
            />
          </div>
          <span
            class="text-md font-bold uppercase text-white transition-all ease-in-out group-hover:text-black"
            >add list</span
          >
        </button>

        <!-- <button
          class="group flex h-10 w-32 items-center justify-center rounded-lg outline outline-1 transition-all ease-in-out hover:bg-zinc-700 focus:outline-none focus:ring focus:ring-red-primary"
        >
          <div class="relative">
            <ChevronDown class="mr-3 h-6 w-6 group-hover:text-black" />
            <ChevronDown
              class="absolute top-0 mr-3 h-6 w-6 group-hover:animate-ping group-hover:text-black"
            />
          </div>
          <span
            class="text-md font-bold uppercase text-white transition-all ease-in-out group-hover:text-black"
            >Season 1</span
          >
        </button> -->
      </div>
    </div>

    <div
      class="row-start-3 mx-auto h-full w-[90%] self-end bg-red-primary p-5 transition-all duration-1000 ease-in-out"
    >
      <div
        class="pl-5 text-left text-2xl font-semibold capitalize text-white drop-shadow-3xl"
      >
        <span>new releases</span>
      </div>
      <List :list="moviesList" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { Play, Plus } from "lucide-vue";
import { getTrendingMovies } from "../api/api";
// import ManageProfiles from "../components/ManageProfiles.vue";
import List from "../components/List.vue";

// :class="{ 'h-[50%] transition-all ease-in-out ': profileClicked }"

export default {
  name: "HomeView",
  computed: {
    profileClicked() {
      return this.$store.getters.getProfileClicked;
    },
    logout() {
      return this.$store.getters.getLogout;
    },
  },
  components: { List, Play, Plus },
  data: () => ({
    moviesList: [],
    image: "",
  }),
  async created() {
    const { data } = await getTrendingMovies();
    this.moviesList = data.results;
    this.image = `https://image.tmdb.org/t/p/original/${this.moviesList[0].backdrop_path}`;
    console.log(data.results);
  },
  mounted() {
    const tl = anime.timeline({ easing: "easeOutExpo", duration: 500 });
    tl.add({
      targets: ".bg-animate",
      translateY: -10,
    });
  },
  methods: {},
  // components: { ManageProfiles },
};
</script>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  row-gap: 1rem;
}

.vignette {
  box-shadow: inset 0 0 200px 10px black;
}

.x {
  background: linear-gradient(to right, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0));
  opacity: 0.75;
}
.bg {
  object-position: 50% 70%;
}
</style>
