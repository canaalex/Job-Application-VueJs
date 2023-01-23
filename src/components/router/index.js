import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/components/views/HomeView.vue";

import JobResultsView from "@/components/views/JobResults.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
];
const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
