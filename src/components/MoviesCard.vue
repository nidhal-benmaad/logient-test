<template>
  <div class="mb-4 box-shadow">
    <router-link
      :to="{ name: 'MovieDetail', params: { id: movie.imdbID } }"
      class="image-container"
    >
      <img
        class="card-img-top rounded"
        height="360"
        :src="movie.Poster"
        alt="Movie poster"
      />
    </router-link>
    <div class="p-3">
      <h6 class="card-title mb-2">{{ movie.Title }}</h6>

      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <p class="movies-text-gray m-0 small">Year: {{ movie.Year }}</p>
          <button class="btn btn-link" @click="handleLike(movie)">
            <i
              :class="movie.liked ? 'fa-solid' : 'fa-regular'"
              class="fa-heart"
            ></i>
          </button>
        </div>
        <span class="badge movies-text-gray border small">{{
          movie.Type
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../EventBus.js";
export default {
  emits: ["handle-like"],
  props: {
    movie: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    handleLike(movie) {
      eventBus.emit("handle-like", { ...movie, liked: !movie.liked });
    },
  },
};
</script>

<style>
.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  transition: transform 0.3s ease-out;
}

.image-container:hover img {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}
</style>
