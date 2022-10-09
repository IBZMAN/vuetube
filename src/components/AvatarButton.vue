<template>
  <section>
    <v-avatar v-if="avatar" :size="size">
      <v-img :src="avatar" alt="avatar-profile" />
    </v-avatar>
    <v-avatar v-else color="red" size="40px">
      <span class="white--text text-h5">IG</span>
    </v-avatar>
  </section>
</template>

<script>
export default {
  props: {
    avatar: String,
    size: { type: Number, default: 40 },
  },
};
</script>

<style></style>
