<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
      <div class="row float-right">
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
                Home
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'FAQ' })"
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-success"
                @click="$router.push({ name: 'Contact' })"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm"></div>
  </div>
</template>

<script>
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
</style>
