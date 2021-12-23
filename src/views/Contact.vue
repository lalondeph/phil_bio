<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
      <div class="top-row">
        <div align="center">
          <h1 class="contact-txt">Contact</h1>
        </div>
      </div>
      <div class="contact-form">
        <form
          action="https://formspree.io/f/mdoborqy"
          @submit="onSubmit()"
          class="text-success"
          method="POST"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="email"
              id="email"
              name="_replyto"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control form-control-lg"
              v-model="message"
              id="message"
              rows="5"
              name="message"
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
export default {
  methods: {
    onSubmit: function () {
      alert("test");
    },
  },
};
</script>

<style scoped>
.contact-txt {
  color: #ffaa00;
  font-size: clamp(4em, 20vw, 8em);
}
</style>