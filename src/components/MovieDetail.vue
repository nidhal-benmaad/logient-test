<template>
  <div class="container my-5" style="height: 400px">
    <div v-if="!movie" class="row h-100">
      <div class="col-md-4 placeholder-glow">
        <span class="placeholder w-75 h-75 rounded"></span>
      </div>
      <div class="col-md-8">
        <span class="placeholder w-25"></span>
        <span class="placeholder w-50"></span>
        <span class="placeholder w-75"></span>
        <span class="placeholder w-75"></span><span class="w-25"></span>
        <span class="placeholder w-25"></span>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-md-4">
        <img
          :src="movie.Poster"
          alt="Movie poster"
          class="img-fluid mb-4 rounded"
        />
      </div>
      <div class="col-md-8">
        <h2 class="mb-4">{{ movie.Title }} ({{ movie.Year }})</h2>
        <p class="mb-3"><strong>Director:</strong> {{ movie.Director }}</p>
        <p class="mb-3"><strong>Actors:</strong> {{ movie.Actors }}</p>
        <p class="mb-3"><strong>Genre:</strong> {{ movie.Genre }}</p>
        <p class="mb-3"><strong>Plot:</strong> {{ movie.Plot }}</p>
        <p class="mb-3"><strong>Rating:</strong> {{ movie.imdbRating }}/10</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieDetailsRequest } from "../services/movies.js";
export default {
  data() {
    return {
      movie: null,
    };
  },
  created() {
    const id = this.$route.params.id; // assumes the ID is passed via the route parameter
    getMovieDetailsRequest(id)
      .then((response) => {
        this.movie = response.data;
      })
      .catch((error) => {
        if (error.response) {
          // Erreur de réponse API (status code différent de 2xx)
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // Erreur de requête (pas de réponse reçue)
          console.log(error.request);
        } else {
          // Erreur de traitement
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  },
};
</script>

<style></style>
