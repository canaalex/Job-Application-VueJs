<template>
  <div class="items-center border-b-2 border-brand-gray-1">
    <div v-if="onJobResultsPage">
      <div class="ml-8 flex items-center py-5">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <div class="flex text-sm font-normal">
          <div class="text-green-600">1234</div>
          <div class="ml-1">jobs matched</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSubNav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
