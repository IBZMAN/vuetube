<template>
  <div>
    <v-text-field
      dense
      :hide-details="true"
      flat
      solo
      label="Search"
      append-icon="mdi-magnify"
      clearable
      autofocus
    ></v-text-field>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-input {
  width: 25rem !important;

  // v-input--is--focused
  &--is-focused {
    border: 1px solid;
  }
}
</style>
