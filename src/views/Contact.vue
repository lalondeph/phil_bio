<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
      <div class="top-row pattern-dots-lg dots">
        <div class="row components float-end">
          <hamburger />
        </div>

          <div class="row">
          <div align="center">
            <h1 class="contact-txt">Contact</h1>
          </div>
          </div>
        </div>
    </div>
    <div class="col-sm"></div>
  </div>
</template>

<script>
import Hamburger from "../components/Hamburger.vue";

export default {
  components: {
    Hamburger,
  },
};
</script>

<style scoped>
.top-row {
  margin-top: 5%;
}
.contact-txt {
  color: #ffaa00;
  font-size: clamp(4em, 20vw, 8em);
}
.dots {
  color: #198754;
}
</style>