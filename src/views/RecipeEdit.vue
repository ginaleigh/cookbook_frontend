<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
      editRecipeParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/recipes/" + this.$route.params.id).then((response) => {
      console.log("recipes show", response);
      this.recipe = response.data;
      this.editRecipeParams = this.recipe;
    });
  },
  methods: {
    updateRecipe: function (recipe) {
      axios
        .patch("/recipes/" + recipe.id, this.editRecipeParams)
        .then((response) => {
          console.log("recipes update", response);
          this.$router.push("/recipes");
        })
        .catch((error) => {
          console.log("recipes update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="recipes-edit">
    <h1>Edit Recipe</h1>
    <form v-on:submit.prevent="updateRecipe(recipe)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="editRecipeParams.name" />
      Width:
      <input type="text" v-model="editRecipeParams.width" />
      Height:
      <input type="text" v-model="editRecipeParams.height" />
      Url:
      <input type="text" v-model="editRecipeParams.url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>
