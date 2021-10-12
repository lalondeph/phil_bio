<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
      <div class="top-row pattern-dots-lg dots">
        <div align="center">
          <h1 class="contact-txt">Contact</h1>
        </div>
      </div>
      <div class="contact-form">
        <form @submit.prevent="handleSubmit" class="text-success">
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email Address</label
            >
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="email"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              <i class="bi bi-lock"> Confidential</i>
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control form-control-lg"
              v-model="message"
              id="message"
              rows="5"
            ></textarea>
          </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
    <div class="col-sm"></div>
  </div>
</template>

<script>
  // methods: {
  //   handleSubmit() {
  //     // Send data to the server or update your stores and such.
  //   }
  // }
</script>

<style scoped>
.contact-txt {
  color: #ffaa00;
  font-size: clamp(4em, 20vw, 8em);
}
.dots {
  color: #198754;
}
</style>