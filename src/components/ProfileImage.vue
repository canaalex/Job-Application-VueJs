<template>
  <img :src="url" class="h-9 w-9 rounded-3xl object-contain" />
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    };
  },
};
</script>
