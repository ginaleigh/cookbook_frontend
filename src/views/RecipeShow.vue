<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
    };
  },
  created: function () {
    axios.get("/recipes/" + this.$route.params.id).then((response) => {
      console.log("recipes show", response);
      this.recipe = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="recipes-show">
    <h2>{{ recipe.name }}</h2>
    <img v-bind:src="recipe.url" v-bind:alt="recipe.name" />
    <p>Width: {{ recipe.width }}</p>
    <p>Height: {{ recipe.height }}</p>
    <router-link v-bind:to="`/recipes/${recipe.id}/edit`">Edit recipe</router-link>
    <router-link to="/recipes">Back to all recipes</router-link>
  </div>
</template>
