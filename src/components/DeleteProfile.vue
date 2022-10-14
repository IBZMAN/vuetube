<template>
  <div
    class="group flex place-content-center"
    :class="[
      getCurrentHoverItem !== index && getCurrentHoverItem === null
        ? 'animate-pulse'
        : '',
    ]"
  >
    <XOctagon fill="#e70000" class="text-center" :size="50" stroke="#161416" />
    <XOctagon
      fill="#e70000"
      class="absolute text-center group-hover:animate-ping"
      :size="50"
      stroke="#161416"
    />
  </div>
</template>

<script>
import { XOctagon } from "lucide-vue";

export default {
  props: ["customClass", "index"],
  components: { XOctagon },
  computed: {
    getCurrentHoverItem() {
      return this.$store.getters.getCurrentHoverItem;
    },

    getCustomClass() {
      return this.customClass;
    },
  },
  created() {},
};
</script>

<style></style>
