<template>
  <div>
    <ul>
      <li>
        <!-- <custom-button text="ibraheem ghaffar"> re </custom-button> -->
        <button class="bg-purple-100">hi</button>
      </li>

      <li>
        <a
          href="#"
          class="rounded-md bg-gradient-to-tr from-indigo-500 to-purple-400 font-semibold text-white ring-indigo-300 transition duration-100 hover:from-indigo-600 hover:to-purple-500 focus-visible:ring active:from-indigo-700 active:to-purple-600 sm:inline-flex"
          >Button 1</a
        >
      </li>
      <li>Home</li>
      <li>Home</li>
    </ul>
  </div>
</template>

<script>
// import CustomButton from "@/components/CustomButton.vue";
export default {
  name: "SideDrawer",
  props: ["isDrawerOpen", "isMiniVariant", "isTemporary"],
  computed: {
    localDrawer() {
      return this.isDrawerOpen;
    },
  },
  components: {},
  data: () => ({
    showDrawer: true,
  }),
  watch: {
    // isDrawerOpen: function (newVal, oldVal) {
    //   console.log("Prop changed: ", newVal, " | was: ", oldVal);
    // },
  },
};
</script>

<style lang="scss"></style>
