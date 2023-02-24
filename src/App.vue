<script>
import MainNav from "./components/Navigation/MainNav.vue";
// import TheHero from "./components/TheHero.vue";
export default {
  name: "App",
  components: { MainNav: MainNav },
};
</script>
<template>
  <MainNav />
  <router-view />
</template>
