<template>
  <div class="row">
    <h3 class="my-4">{{ title }}</h3>
    <div v-for="movie in movies" :key="movie.imdbID" class="col-md-3">
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
  },
};
</script>

<style></style>
