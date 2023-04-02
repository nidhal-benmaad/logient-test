<template>
  <div class="container">
    <MoviesList :movies="favoritesList" title="My favorite List" />
  </div>
</template>

<script>
import MoviesList from "../components/MoviesList.vue";
export default {
  name: "FavoriteView",
  props: ["user"],
  components: {
    MoviesList,
  },
  data() {
    return {
      favoritesList: [],
    };
  },
  created() {},
  mounted() {
    // const user = JSON.parse(localStorage.getItem("user"));
    let movies = JSON.parse(localStorage.getItem("movies"));
    console.log("movies", movies);
    // this.$nextTick(() => {
    if (this.user) {
      this.favoritesList = movies
        .filter((item) => this.user.favorites.includes(item.imdbID))
        .map((item) => ({
          ...item,
          liked: true,
        }));
    }
    // });
  },
};
</script>

<style></style>
