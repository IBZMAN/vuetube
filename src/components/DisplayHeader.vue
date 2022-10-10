<template>
  <div class="z-10 my-10 min-w-full place-self-center">
    <h1
      class="text-5xl font-semibold text-zinc-200 sm:text-6xl"
      :class="{
        'opacity-0 transition-all delay-700 duration-500 ease-in-out':
          profileClicked,
        'opacity-1 transition-all delay-700 duration-500 ease-in-out': logout,
      }"
    >
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "DisplayHeader",

  computed: {
    profileClicked() {
      return this.$store.getters.getProfileClicked;
    },
    logout() {
      return this.$store.getters.getLogout;
    },
  },
};
</script>

<style></style>
