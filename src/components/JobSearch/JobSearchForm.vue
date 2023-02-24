<template>
  <form
    class="flex h-12 w-11/12 items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full text-base font-light">
      <TextInput v-model="role" placeholder="Software Engineer" v />
      <!-- v-model="role" -->
      <!-- <input
        type="text"
        :value="role"
        placeholder="Software Engineer"
        @input="updateRole"
      /> -->
      <div class="border-x-2 border-black p-3">in</div>
      <div class="ml-3 flex bg-red-200">
        <TextInput v-model="location" placeholder="Los Angeles" />
        <!-- <input
          type="text"
          :value="location"
          placeholder="Los Angeles"
          @input="location = $event.target.value"
        /> -->
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="ml-5 rounded-r-3xl" />
  </form>
</template>
<script>
import ActionButton from "../Shared/ActionButton.vue";
import TextInput from "../Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(payload) {
      this.role = payload;
    },
    updateLocation(payload) {
      this.location = payload;
    },
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>
