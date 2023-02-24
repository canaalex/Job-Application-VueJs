<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
      <div class="mt-8 grid grid-cols-12">
        <div class="border-blue-1 col-span-1 col-start-1"></div>
        <div class="border-blue col-span-5 col-start-2">
          <TheHeadline />
          <JobSearchForm />
        </div>
        <div class="border-blue-1 col-span-5 col-start-7">
          <img
            src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1586102948/1586102947.jpg"
            alt="landingpic"
          />
        </div>
        <div class="border-blue-1 col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
  This is the hero
</template>
<script>
import TheHeadline from "./TheHeadline.vue";
import JobSearchForm from "./JobSearchForm.vue";
export default {
  name: "TheHero",
  components: { TheHeadline, JobSearchForm },
};
</script>
