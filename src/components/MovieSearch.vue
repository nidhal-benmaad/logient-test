<template>
  <div>
    <form @submit.prevent="searchMovies" class="row g-3 my-4">
      <div class="input-group mb-3">
        <input
          v-model="query"
          type="text"
          class="form-control form-control-lg movies-input"
          placeholder="Recherche de films"
        />
        <button type="submit" class="btn movies-btn">
          <i class="fas fa-search"></i> Rechercher
        </button>
      </div>
    </form>
    <MoviesList :movies="movies" title="Movies" />
  </div>
</template>

<script>
import MoviesList from "../components/MoviesList.vue";
import { searchMoviesRequest } from "../services/movies.js";
import { eventBus } from "../EventBus.js";
export default {
  components: {
    MoviesList,
  },
  data() {
    return {
      query: "",
      movies: [],
    };
  },
  created() {
    eventBus.on("handle-like", (newItem) => {
      let user = JSON.parse(localStorage.getItem("user") || null);
      // push the new favorite movie to the user object
      if (!user) {
        this.$router.push({ name: "Login" });
        return;
      }
      this.handleUserFavorites(user, newItem);
    });
  },
  beforeUnmount() {
    eventBus.off("handle-like");
  },
  mounted() {
    this.query = JSON.parse(localStorage.getItem("query"));
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    const user = JSON.parse(localStorage.getItem("user") || null);
    if (user) {
      this.movies = movies.map((item) => ({
        ...item,
        liked: user.favorites.includes(item.imdbID),
      }));
    } else {
      this.movies = movies;
      console.log("this.movies", this.movies);
    }
  },
  methods: {
    searchMovies() {
      searchMoviesRequest(this.query)
        .then((response) => {
          this.movies = response.data.Search;
          this.movies = this.movies.map((item) => ({
            ...item,
            liked: false,
          }));
          localStorage.setItem("query", JSON.stringify(this.query));
          localStorage.setItem("movies", JSON.stringify(this.movies));
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
    handleUserFavorites(user, newItem) {
      let index = this.movies.findIndex(
        (item) => item.imdbID === newItem.imdbID
      );
      this.movies.splice(index, 1, newItem);
      // get the user from localStorage
      console.log("newItem.liked", newItem.liked);
      if (newItem.liked) {
        if (!user.favorites.includes(newItem.imdbID))
          user.favorites.push(newItem.imdbID);
      } else {
        let index = user.favorites.findIndex((item) => item === newItem.imdbID);
        user.favorites.splice(index, 1);
      }
      localStorage.setItem("movies", JSON.stringify(this.movies));
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
};
</script>
