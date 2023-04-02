<template>
  <div id="app">
    <NavBar v-if="visible" />
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
      visible: true,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.name == "Login" || to.name == "Register") {
          this.visible = false;
        } else {
          this.visible = true;
        }
      },
    },
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
