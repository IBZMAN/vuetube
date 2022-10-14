<template>
  <div class="grid">
    <div class="mx-auto my-auto w-[90%] text-start text-white">
      <!-- GENRES -->
      <div class="mb-8 flex justify-start text-neutral-400">
        <button
          class="mr-5 rounded-md px-[.5rem] text-center text-sm uppercase outline outline-1 outline-offset-1 transition-all ease-in-out hover:bg-[#a3a3a3]"
          v-for="(genre, index) in movies[0].genres"
          :key="index"
        >
          {{ genre }}
        </button>
      </div>

      <!-- TITLE -->
      <h1
        class="mb-8 font-bold capitalize drop-shadow-2xl md:text-3xl lg:text-[4.5rem]"
      >
        {{ search }}
      </h1>

      <!-- METADATA (YEAR, LENGTH, AGE ETC.) -->
      <div
        class="mb-5 flex justify-start text-white"
        v-for="(movie, index) in movies"
        :key="index"
      >
        <span class="text-md mr-5">{{ movie.age }}</span>
        <span class="text-md mr-5">{{ movie.year_released }}</span>

        <span class="text-md mr-5">{{ movie.length }} </span>
      </div>

      <!-- DESCRIPTION -->
      <div class="mb-5 xl:max-w-xl">
        <p>
          {{ episode.overview }}
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

        <button
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
        </button>
      </div>

      <!-- EPISODES -->
      <Carousel
        v-if="episode && episode.episodes.length > 0"
        :episodes="episode.episodes"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Play, Plus, ChevronDown } from "lucide-vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "HomeView",
  data: () => ({
    image: "",
    search: "",
    episode: {},
    movies: [
      {
        length: "2h 10m",
        year_released: "2017",
        age: "16+",
        genres: ["terror", "supernatural", "thriller", "horror"],
      },
    ],
  }),
  components: { Play, Plus, ChevronDown, Carousel },
  async created() {
    const API_KEY = "8f591f7bb26fdcf1c70cbec8bbdc83ce";
    this.search = "stranger things";
    const STRANGER_THINGS_SEASON = "1";
    const STRANGER_THINGS_TMDB_ID = "66732";

    const result = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${this.search}`
    );

    this.image = `https://image.tmdb.org/t/p/original${result.data.results[0].backdrop_path}`;

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${STRANGER_THINGS_TMDB_ID}/season/${STRANGER_THINGS_SEASON}?api_key=${API_KEY}`
    );

    this.episode = data;

    console.log(data);
  },
};
</script>

<style lang="scss" scoped></style>
