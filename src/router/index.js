import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecipeIndex from "../views/RecipeIndex.vue";
import RecipeNew from "../views/RecipeNew.vue";
import RecipeShow from "../views/RecipeShow.vue";
import RecipeEdit from "../views/RecipeEdit.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: () => import("../views/AboutView.vue") },
  { path: "/recipes", name: "recipes", component: RecipeIndex },
  { path: "/recipes/new", name: "recipes-new", component: RecipeNew },
  { path: "/recipes/:id", name: "recipes-show", component: RecipeShow },
  { path: "/recipes/:id/edit", name: "recipes-edit", component: RecipeEdit },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
