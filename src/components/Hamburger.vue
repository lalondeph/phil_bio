<template>
  <div class="container">
    <div class="col-sm">
      <div class="row">
        <div class="btn-group">
          <button
            type="button"
            class="btn toggle dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-list stripes"></i>
          </button>

          <ul class="dropdown-menu dropdown-menu-end border-success">
            <li>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'Bio' })"
              >
                <i class="bi bi-house-door-fill"></i> Home
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'FAQ' })"
              >
                <i class="bi bi-person-fill text-secondary"></i> FAQ
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'Contact' })"
              >
                <i class="bi bi-envelope-fill"></i> Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Recieve current page as a prop to set active
</script>

<style scoped>
.row {
  position: relative;
  z-index: 99;
}
.toggle {
  background-color: #ffaa00;
  color: white;
  text-align: center;
}
.dropdown-toggle::after {
    content: none;
}
.bi-house-door-fill {
  color: #ffaa00;
}
</style>
