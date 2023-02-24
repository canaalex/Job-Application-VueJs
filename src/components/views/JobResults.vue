<template>
  <div class="flex w-full flex-row flex-nowrap">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>
<script>
import JobFiltersSidebar from "../JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "../JobResults/JobListings.vue";
export default {
  name: "JobResults",
  components: { JobFiltersSidebar, JobListings },
};
</script>
