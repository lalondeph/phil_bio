<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler ms-auto align-self-centerd"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="bi bi-list stripes fs-2"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav ms-auto text-end">
          <button
            class="dropdown-item text-success"
            :class="{ active: $route.name === 'Bio' }"
            @click="$router.push({ name: 'Bio' })"
          >
            <i class="bi bi-house-door-fill"></i> Home
          </button>

          <!-- <button
            class="dropdown-item text-success"
            :class="{ active: $route.name === 'About' }"
            @click="$router.push({ name: 'About' })"
          >
            <i class="bi bi-person-fill text-secondary"></i> About
          </button> -->

          <button
            class="dropdown-item text-success"
            :class="{ active: $route.name === 'Contact' }"
            @click="$router.push({ name: 'Contact' })"
          >
            <i class="bi bi-envelope-fill"></i> Contact
          </button>

          <a
            href="https://github.com/lalondeph"
            target="_blank"
            role="button"
            class="btn dropdown-item text-success"
          >
            <i class="bi bi-github text-dark"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
.navbar-nav > .active {
  background: #d7d2c8;
}
.stripes {
  color: #ffaa00;
}
.dropdown-toggle::after {
  content: none;
}
.bi-house-door-fill {
  color: #ffaa00;
}
@media (max-width: 991.98px) {
  .dropdown-item {
    font-size: clamp(2em, 6vw, 8em);
  }
}
</style>