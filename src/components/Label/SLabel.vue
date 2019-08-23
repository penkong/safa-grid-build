<template>
  <label :for="rowLabel">
    <slot>{{rowLabel}}</slot>
  </label>
</template>

<script>
export default {
  name: "SLabel",
  props: {
    rowLabel: {
      type: String,
      default: "",
      required: true,
      validator: function() {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>