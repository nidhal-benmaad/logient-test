<template>
  <div id="app">
    <NavBar v-if="$route.path !== '/login' || $route.path !== '/register'" />
    <router-view :user="user" @login="login"></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    login(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("favorites");
    },
  },
  mounted() {
    const user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
    }
  },
};
</script>
