<template>
  <div>
    <div class="row float-right">
      <div class="dropdown dropleft">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="bi bi-list stripes"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="dropdown-item">
            <router-link to="/">Home</router-link>
          </div>
          <div class="dropdown-item">
            <router-link to="/FAQ">FAQ</router-link>
          </div>
          <div class="dropdown-item">
            <router-link to="/Contact">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.stripes {
  color: #a76f00;
}
.row {
  position: relative;
  z-index: 99;
}
</style>
