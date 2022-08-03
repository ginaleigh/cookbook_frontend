<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newRecipeParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createRecipe: function () {
      axios
        .post("/recipes", this.newRecipeParams)
        .then((response) => {
          console.log("recipe create", response);
          this.$router.push("/recipe");
        })
        .catch((error) => {
          console.log("recipe create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="recipe-new">
    <h1>New Recipe</h1>
    <form v-on:submit.prevent="createRecipe()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newRecipeParams.name" />
      Width:
      <input type="text" v-model="newRecipeParams.width" />
      Height:
      <input type="text" v-model="newRecipeParams.height" />
      Url:
      <input type="text" v-model="newRecipeParams.url" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
