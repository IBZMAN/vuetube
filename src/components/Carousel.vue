<template>
  <div class="wrapper mt-10 grid overflow-hidden scroll-smooth">
    <div v-for="(group, group_index) in episodes_splitted" :key="group_index">
      <section class="relative grid min-w-full" :id="`section${group_index}`">
        <a
          :href="getPreviousList(group_index)"
          class="absolute top-0 bottom-0 left-0 z-[999] w-10 bg-black p-10 text-center text-[6rem] text-white"
          >‹</a
        >

        <div v-for="(ep, index) in group" :key="index">
          <div>
            <button
              class="epi-btn group relative mr-2 rounded-lg outline-none transition-all duration-500 ease-in-out hover:z-50 hover:scale-125 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#E70000]"
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
          </div>
        </div>
        <a
          :href="getNextList(group_index)"
          class="absolute top-0 bottom-0 right-0 z-[999] w-10 bg-black p-10 text-center text-[6rem] text-white"
          >></a
        >
      </section>
    </div>

    <!-- <section id="section1">
      <a href="#section3">‹</a>

      <div class="item" v-for="(ep, index) in episodes" :key="index">
        <button
          class="epi-btn group relative mr-2 rounded-lg outline-none transition-all duration-500 ease-in-out hover:z-50 hover:scale-125 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#E70000]"
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
      </div>

      <a href="#section2">›</a>
    </section> -->
  </div>
</template>

<script>
import { PlayCircle } from "lucide-vue";

export default {
  name: "CarouselComponent",
  props: ["episodes"],
  data: () => ({
    episodes_splitted: [],
    currentSection: "",
    nextSection: "",
    prevSection: "",
  }),

  computed: {
    getEpisode() {
      return this.episodes;
    },

    endingSection() {
      return this.episodes_splitted.length - 1;
    },
  },

  methods: {
    getPreviousList(value) {
      let v = "";

      if (value === 0 && value - 1 !== 0) {
        v = this.endingSection;
      } else v = value - 1;

      return `#section${v}`;
    },
    getNextList(value) {
      let v = 0;

      if (value !== this.endingSection) {
        v = value + 1;
      }
      return `#section${v}`;
    },
  },

  created() {
    const size = 4;

    this.episodes_splitted = this.getEpisode.reduce((acc, curr, i) => {
      if (!(i % size)) {
        acc.push(this.episodes.slice(i, i + size)); // ..push a chunk of the original array to the accumulator
      }
      return acc;
    }, []);

    console.log(this.episodes_splitted);
  },
  components: { PlayCircle },
};
</script>

<style lang="scss" scoped>
$itemGrow: 1.2;
$duration: 250ms;

.wrapper {
  grid-template-columns: repeat(3, 100%);

  section {
    grid-template-columns: repeat(8, auto);

    a {
      &:nth-of-type(1) {
        background: linear-gradient(
          -90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
      }
      &:nth-of-type(2) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
      }
    }
  }

  .epi-btn:hover a {
    transform: scale(125);
  }
  .episode-num {
    -webkit-text-stroke: 2px white;
  }

  .epi-btn:hover .episode-num {
    -webkit-text-stroke: 2px #e70000;
    color: #893030;
  }
}
</style>
