<template>
  <div class="container">
    <MoviesList
      :movies="favoritesList"
      title="My favorite List"
      noMoviesLabel="No favorite movies available."
    />
  </div>
</template>

<script>
import MoviesList from "../components/MoviesList.vue";
export default {
  name: "FavoriteView",
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
    const user = JSON.parse(localStorage.getItem("user"));
    let movies = JSON.parse(localStorage.getItem("movies"));

    this.$nextTick(() => {
      if (user) {
        let favorites = movies
          .filter((item) => user.favorites.includes(item.imdbID))
          .map((item) => ({
            ...item,
            liked: true,
          }));
        this.favoritesList = favorites;
      }
    });
  },
};
</script>

<style></style>
