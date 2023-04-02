<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Se connecter</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="login()">
          <div class="form-group mb-3">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control movies-input"
              id="email"
              placeholder="Enter email"
              v-model.trim="form.email"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control movies-input"
              id="password"
              placeholder="Password"
              v-model.trim="form.password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary movies-btn">
            Login
          </button>
          <div class="text-danger">{{ formErrors }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      formTitle: "Login",
      form: {
        email: "",
        password: "",
      },
      users: [],
      formErrors: "",
      formProcessing: false,
    };
  },
  mounted() {
    const users = localStorage.getItem("users");
    if (users) {
      this.users = JSON.parse(users);
    }
  },
  methods: {
    login() {
      // this.formProcessing= true
      const user = this.users.find(
        (user) =>
          user.email === this.form.email && user.password === this.form.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/home");
      } else {
        this.formErrors = "Invalid email or password";
      }
      console.log("this.user", user);
    },
  },
};
</script>

<style>
.is-invalid {
  border-color: #dc3545;
}
.invalid-feedback {
  color: #dc3545;
}
</style>
