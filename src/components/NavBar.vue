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
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
