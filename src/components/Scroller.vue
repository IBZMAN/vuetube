<template>
  <a
    :href="side === '<' ? getPreviousList(index) : getNextList(index)"
    class="absolute top-0 bottom-0 z-[999] bg-black text-[6rem] text-white transition-all ease-in-out hover:text-red-primary"
    :class="position"
  >
    {{ side }}
  </a>
</template>

<script>
export default {
  name: "ScrollerComponent",
  props: ["index", "side", "scrollableEnd", "position"],

  methods: {
    getPreviousList(value) {
      let v = "";

      if (value === 0 && value - 1 !== 0) {
        v = this.scrollableEnd; // last section
      } else v = value - 1; // preious section

      console.log(v);
      return `#section${v}`;
    },
    getNextList(value) {
      let v = 0;

      if (value !== this.scrollableEnd) {
        v = value + 1;
      }
      return `#section${v}`;
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
