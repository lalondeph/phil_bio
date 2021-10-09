<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
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
                @click="$router.push({ name: 'Bio' })"
              >
                <i class="bi bi-house-door-fill"></i> Home
              </button>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'FAQ' })"
              >
                <i class="bi bi-person-fill text-secondary"></i> FAQ
              </button>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'Contact' })"
              >
                <i class="bi bi-envelope-fill"></i> Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
// TODO: Recieve current page as a prop to set active
</script>

<style scoped>
.stripes {
  color: #ffaa00;
}
.dropdown-toggle::after {
  content: none;
}
.bi-house-door-fill {
  color: #ffaa00;
}
@include media-breakpoint-down(lg) {
  .dropdown-item {
    font-size: 4em;
  }
}
</style>
