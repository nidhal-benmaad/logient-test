<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- Left content -->
      <div class="d-flex align-items-center me-auto">
        <a class="navbar-brand" href="#">Logient-test</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/home"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/my-list" class="nav-link" href="#"
              >My List</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Right content -->
      <div class="d-flex align-items-center ms-auto">
        <ul v-if="user" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <span class="nav-link mb-0 mr-2">
              {{ user.username }} <i class="fa-regular fa-user"></i
            ></span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
        <div v-else class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link
            to="/login"
            class="btn nav-link text-white ms-3"
            type="button"
          >
            Login
          </router-link>
          <router-link
            class="btn btn-outline-primary movies-btn ms-3"
            type="button"
            to="/register"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    logout() {
      let users = JSON.parse(localStorage.getItem("users"));
      let index = users.findIndex((item) => item.imdbID === this.user.imdbID);
      users[index].favorites = this.user.favorites;
      console.log("user", this.user);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.removeItem("user");
      localStorage.removeItem("movies");
      localStorage.removeItem("query");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style></style>
