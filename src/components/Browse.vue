<template>
  <div class="group grid cursor-pointer grid-cols-2 items-center text-white">
    <span class="justify-self-end text-sm font-light capitalize">browse</span>
    <ChevronDown
      class="ml-2 h-4 w-4 transition-all ease-linear group-hover:text-[#E70000]"
    />
  </div>
</template>

<script>
import { ChevronDown } from "lucide-vue";

export default {
  name: "BrowseComponent",
  components: {
    ChevronDown,
  },
  computed: {},
};
</script>

<style></style>
