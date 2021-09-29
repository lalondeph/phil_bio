<template>
  <div>
    <div class="container">
      <div class="col-sm"></div>
      <div class="components">
        <hamburger />
        <router-view />
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
import Hamburger from './components/Hamburger.vue';

export default {
  components: {
    Hamburger
  }
}
</script>

<style>
</style>
