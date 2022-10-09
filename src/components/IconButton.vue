<template>
  <v-btn icon>
    <v-icon :size="size">{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String,
    size: { type: Number, default: 25 },
  },

  created() {
    console.log(this.icon);
  },
};
</script>

<style lang="scss"></style>
