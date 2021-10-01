<template>
  <div>
    <div class="components">
      <hamburger />
      <router-view />
    </div>
  </div>
</template>

<script>
import Hamburger from "./components/Hamburger.vue";

export default {
  components: {
    Hamburger,
  },
};
</script>

<style scoped>
.components {
  overflow: hidden;
}
</style>
