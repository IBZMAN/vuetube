<template>
  <button
    class="epi-btn group relative mr-2 rounded-lg outline-none transition-all duration-500 ease-in-out hover:z-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-primary"
  >
    <div>
      <img
        :src="'https://image.tmdb.org/t/p/original' + video.still_path"
        alt="video"
        class="rounded-lg group-hover:brightness-50"
      />

      <PlayCircle
        class="absolute top-0 left-0 right-0 bottom-0 m-auto h-auto w-1/5 opacity-0 transition-all duration-300 ease-in-out group-hover:text-red-primary group-hover:opacity-100"
      />

      <span
        class="episode-num absolute bottom-5 right-10 text-[3rem] font-bold text-transparent transition-all"
        >{{ video.episode_number }}</span
      >

      <span class="absolute bottom-2 right-8 text-sm text-white transition-all"
        >{{ video.runtime }} min</span
      >

      <div
        class="video-progress absolute bottom-0 left-0 right-0"
        :style="videoProgressStyle"
      ></div>

      <span
        class="absolute bottom-2 left-2 text-sm text-white opacity-0 transition-all ease-in-out group-hover:opacity-100"
        >{{ videoProgress }} min</span
      >
    </div>
  </button>
</template>

<script>
import { PlayCircle } from "lucide-vue";

export default {
  name: "ThumbnailComponent",
  props: ["video", "index"],
  components: { PlayCircle },
  computed: {
    videoProgress() {
      return Math.floor(Math.random() * (this.video.runtime - 0)) + 0;
    },
    videoProgressStyle() {
      return {
        width: `${this.videoProgress}%`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.epi-btn {
  &:hover {
    overflow: visible;
  }

  &:hover .episode-num {
    -webkit-text-stroke: 2px #e70000;
    color: #893030;
  }
}

.episode-num {
  -webkit-text-stroke: 2px white;
}

.video-progress {
  border-bottom: 5px solid #e70000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
}
</style>
