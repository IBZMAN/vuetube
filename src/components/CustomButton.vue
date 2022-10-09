<template>
  <div>
    <slot></slot>

    <span v-if="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    text: String,
  },
};
</script>

<style></style>
