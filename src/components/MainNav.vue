<template>
  <div
    class="flex h-full flex-nowrap space-x-2 border-b-2 border-brand-gray-1 p-4"
  >
    <div></div>
    <a href="/" class="items-center text-xl">Google Careers</a>
    <button>{{ team }}</button>
    <button>Locations</button>
    <button>Benefits</button>
    <button>Jobs</button>
    <button>{{ students.firstName }}</button>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      team: "teams",
      students: {
        firstName: "riya",
        lastName: "jose",
      },
    };
  },
};
</script>
