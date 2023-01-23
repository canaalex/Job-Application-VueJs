<template>
  <section>
    <h1 class="mb-20 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span
      ><br />for everyone
    </h1>
    <h2 class="text-2xl font-light">Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "hello",
      interval: null,
      action: "Build",
    };
  },
  computed: {
    actionClasses() {
      return {
        build: this.action === "Build",
        code: this.action === "Code",
        design: this.action === "Design",
      };
    },
  },
  created() {
    this.changeTheAction();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    changeTheAction() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Code", "Design"];
        let currentIndex = actions.indexOf(this.action);
        let nextAction = actions[(currentIndex + 1) % 3];
        this.action = nextAction;
        console.log(nextAction);
      }, 3000);
    },
  },
};
</script>
<style scoped>
.build {
  color: aqua;
}
.code {
  color: blue;
}
.design {
  color: blueviolet;
}
</style>
