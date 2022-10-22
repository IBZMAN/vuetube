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
import Swal from "sweetalert2";

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
  methods: {
    fire() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
  created() {},
};
</script>

<style></style>
