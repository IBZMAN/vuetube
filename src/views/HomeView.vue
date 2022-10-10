<template>
  <div
    class="grid min-h-screen"
    style="box-shadow: inset 0 0 85px rgba(0, 0, 0, 0.4)"
  >
    <img :src="image" alt="s" class="min-h-screen min-w-full object-cover" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data: () => ({
    image: "",
    search: "",
  }),
  async created() {
    const API_KEY = "8f591f7bb26fdcf1c70cbec8bbdc83ce";
    this.search = "justice league";

    const result = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.search}`
    );

    this.image = `https://image.tmdb.org/t/p/original${result.data.results[1].backdrop_path}`;
  },
};
</script>
