<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  //   data() {
  //     return {
  //       primary: true,
  //     };
  //   },
  computed: {
    buttonClass() {
      return {
        primary: this.type === "primary",
        secondary: this.type === "secondary",
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-4 py-2 font-medium;
}
.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent  text-brand-blue-1;
}
</style>
