<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Créer un compte</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="registerUser">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control movies-input"
              id="email"
              v-model="email"
              required
            />
            <div class="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control movies-input"
              id="password"
              v-model="password"
              required
            />
            <div class="invalid-feedback">Please enter a password.</div>
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control movies-input"
              id="confirmPassword"
              v-model="confirmPassword"
              required
            />
            <div class="invalid-feedback">Please confirm your password.</div>
          </div>
          <button type="submit" class="btn btn-primary movies-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    registerUser() {
      console.log("register");
      // Check if passwords match
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Check if user already exists in local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === this.email);
      if (user) {
        alert("User already exists.");
        return;
      }

      // Add new user to local storage
      users.push({ email: this.email, password: this.password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("User successfully registered.");

      // Redirect to login page
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.form-control:focus {
  border-color: #3f80ba;
  box-shadow: none;
}

.invalid-feedback {
  display: none;
  color: red;
}

.form-control.is-invalid {
  border-color: red;
  box-shadow: none;
}

.form-control.is-invalid + .invalid-feedback {
  display: block;
}
</style>
