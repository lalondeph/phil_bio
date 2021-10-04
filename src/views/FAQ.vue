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
            <h1 class="faq-txt">FAQ</h1>
          </div>
        </div>

        <div class="row">
          <div class="faq-accordion">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="faqOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    FAQ #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">Hello!</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="faqTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    FAQ #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">hello agian</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="faqThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    FAQ #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">And again!</div>
                </div>
              </div>
            </div>
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
.faq-txt {
  color: #ffaa00;
  font-size: 8em;
}
.dots {
  color: #198754;
}
.faq-accordion {
  margin-top: 5%;
}
</style>