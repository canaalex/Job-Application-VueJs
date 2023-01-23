<template>
  <div
    :class="[
      'flex',
      'flex-nowrap',
      ' border-b-2',
      'border-brand-gray-1',
      'p-4',
      headerHeightClass,
    ]"
  >
    <router-link :to="{ name: 'Home' }" class="h-full items-center text-xl"
      >Google Careers</router-link
    >
    <nav class="ml-16 flex h-full items-center space-x-9 pt-1">
      <a v-for="menuItem in menuItems" :key="menuItem.text">
        <router-link :to="menuItem.url">{{ menuItem.text }}</router-link>
      </a>
    </nav>
    <div class="ml-auto h-full items-center">
      <ProfileImage v-if="isLoggedIn" />
      <ActionButton v-else text="Sign in" type="primary" @click="loginUser" />
    </div>
  </div>
  <TheSubNav v-if="isLoggedIn" />
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import TheSubNav from "./TheSubNav.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubNav,
  },

  data() {
    return {
      menuItems: [
        {
          text: "Teams",
          url: "/",
        },
        {
          text: "Locations",
          url: "/",
        },
        { text: "Benefits", url: "/" },
        {
          text: "Jobs",
          url: "/jobs/results",
        },
        { text: "Students", url: "/" },
      ],

      team: "Teams",
      location: "Locations",
      benefits: "Benefits",
      jobs: "Jobs",
      students: "Students",
      url: "https://careers.google.com/",
      user: {
        firstName: "riya",
        lastName: "jose",
      },
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-18": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
      console.log("hi");
    },
  },
};
</script>
