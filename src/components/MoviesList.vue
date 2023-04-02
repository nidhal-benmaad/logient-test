<template>
  <div class="row">
    <h3 class="my-4">{{ title }}</h3>
    <div
      v-if="!movies || movies.length == 0"
      class="col-md-12 d-flex justify-content-center align-items-center h-50"
    >
      <h1 class="display-6">{{ noMoviesLabel }}</h1>
    </div>
    <div
      v-else
      v-for="movie in movies"
      :key="movie.imdbID"
      class="col-sm-6 col-md-4 col-lg-3"
    >
      <MoviesCard :movie="movie" />
    </div>
  </div>
</template>

<script>
import MoviesCard from "./MoviesCard.vue";
export default {
  components: {
    MoviesCard,
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => "",
    },
    noMoviesLabel: {
      type: String,
      default: () => "No movies available. Try searching for a movie.",
    },
  },
};
</script>

<style></style>
