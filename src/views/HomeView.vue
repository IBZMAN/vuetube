<template>
  <div class="grid">
    <div class="my-auto ml-12 text-start text-white">
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
        <span class="text-md mr-5">{{ movie.year_released }}</span>

        <span class="text-md mr-5">{{ movie.age }}</span>

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
          class="shadow-[] group flex h-10 w-32 items-center justify-center rounded-lg bg-[#E70000] transition-all hover:bg-[#cb0000] focus:outline-none focus:ring focus:ring-[#f09f9f]"
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
          class="group mx-6 flex h-10 w-32 items-center justify-center rounded-lg bg-black transition-all ease-in-out hover:bg-zinc-700 focus:outline-none focus:ring focus:ring-[#E70000]"
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
          class="group flex h-10 w-32 items-center justify-center rounded-lg outline outline-1 transition-all ease-in-out hover:bg-zinc-700 focus:outline-none focus:ring focus:ring-[#E70000]"
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
      <!-- <div class="mt-28 flex">
        <button
          v-for="(ep, index) in episode.episodes"
          :key="index"
          class="epi-btn group relative mr-2 w-[450px] rounded-lg outline-none transition-all duration-500 ease-in-out hover:z-50 hover:scale-125 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#E70000]"
        >
          <img
            :src="'https://image.tmdb.org/t/p/original' + ep.still_path"
            alt="episode"
            class="rounded-lg group-hover:brightness-50"
          />

          <PlayCircle
            class="absolute top-0 left-0 right-0 bottom-0 m-auto h-auto w-1/5 opacity-0 transition-all duration-300 ease-in-out group-hover:text-[#E70000] group-hover:opacity-100"
          />

          <span
            class="episode-num absolute bottom-0 right-10 text-[3rem] font-bold text-transparent transition-all"
            >{{ ep.episode_number }}</span
          >
        </button>
      </div> -->

      <Carousel
        v-if="episode && episode.episodes.length > 0"
        :episodes="episode.episodes"
      />
    </div>

    <div class="vignette absolute -z-10 min-h-screen min-w-full"></div>
    <div class="x absolute -z-20 min-h-screen min-w-full"></div>

    <img
      :src="image"
      alt="s"
      class="bg absolute -z-30 h-[100%] w-[100%] object-cover"
    />
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

<style lang="scss" scoped>
.vignette {
  height: 180px;
  box-shadow: inset 0 0 200px 10px black;
}

.x {
  background: linear-gradient(to right, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0));
  opacity: 0.92;
}
.bg {
  object-position: 50% 70%;
}
</style>
