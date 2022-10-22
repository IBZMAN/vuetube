<template>
  <div class="grid grid-cols-5 gap-5">
    <div v-for="(item, index) in list" :key="index">
      <Poster :item="item" />
    </div>
  </div>
</template>

<script>
import Poster from "./Poster.vue";

export default {
  name: "ListComponent",
  props: ["list"],
  computed: {},
  components: { Poster },
};
</script>

<style></style>
