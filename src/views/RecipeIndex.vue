<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipes: [],
    };
  },
  created: function () {
    this.indexRecipes();
  },
  methods: {
    indexRecipes: function () {
      axios.get("/recipes.json").then((response) => {
        this.recipes = response.data;
        console.log("Recipes: ", response.data);
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>Blog Recipes</h1>
    <div v-for="recipe in recipes" v-bind:key="recipe.id">
      <h2>Title: {{ recipe.title }}</h2>
      <img v-bind:src="recipe.image" v-bind:alt="recipe.title" />
      <p>Body: {{ recipe.body }}</p>
      <a v-bind:href="`/recipes/${recipe.id}`">More info</a>
    </div>
  </div>
</template>
