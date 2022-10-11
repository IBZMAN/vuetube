<template>
  <div class="grid min-h-screen">
    <div class="my-auto ml-12 text-start text-white">
      <!-- GENRES -->
      <div class="mb-8 flex justify-start text-white">
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
        class="mb-8 font-bold capitalize drop-shadow-2xl md:text-3xl lg:text-[5rem]"
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
          The Justice League is a team of superheroes appearing in American
          comic books published by DC Comics. The team first appeared in The
          Brave and the Bold #28 (March 1960). The team was conceived by writer
          Gardner Fox as a revival of the Justice Society of America, a similar
          team from DC Comics from the 1940s which had been pulled out of print
          due to a decline in sales.
        </p>
      </div>

      <!-- BUTTONS -->
      <div class="flex">
        <button
          class="group flex h-10 w-32 items-center justify-center rounded-lg bg-[#E70000] transition-all hover:bg-[#cb0000] focus:outline-none focus:ring focus:ring-[#f09f9f]"
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
          class="group mx-6 flex h-10 w-32 items-center justify-center rounded-lg bg-black transition-all ease-in-out hover:bg-white focus:outline-none focus:ring focus:ring-black"
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
      </div>
    </div>

    <div class="vignette absolute -z-10 min-h-screen min-w-full"></div>
    <div class="x absolute -z-20 min-h-screen min-w-full"></div>

    <img
      :src="image"
      alt="s"
      class="absolute -z-30 min-h-screen min-w-full object-cover"
    />
  </div>
</template>

<script>
import axios from "axios";
import { Play, Plus } from "lucide-vue";

export default {
  name: "HomeView",
  data: () => ({
    image: "",
    search: "",
    movies: [
      {
        length: "2h 10m",
        year_released: "2017",
        age: "16+",
        genres: ["terror", "supernatural", "thriller", "horror"],
      },
    ],
  }),
  components: { Play, Plus },
  async created() {
    const API_KEY = "8f591f7bb26fdcf1c70cbec8bbdc83ce";
    this.search = "stranger things";

    const result = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${this.search}`
    );

    this.image = `https://image.tmdb.org/t/p/original${result.data.results[0].backdrop_path}`;
  },
};
</script>

<style>
.vignette {
  height: 180px;
  box-shadow: inset 0 0 200px 10px black;
}

.x {
  background: linear-gradient(to right, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0));
  opacity: 0.92;
}
</style>
