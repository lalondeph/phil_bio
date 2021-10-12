<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
      <div class="top-row pattern-dots-lg dots">
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
                  Why isn't this section complete?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Great question! Between school, work, and family, I'm swamped.
                  I will update this section as soon as I can.
                </div>
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
                  Got any good memes tho?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
                align="center"
              >
                <div class="accordion-body">
                  <img src="../assets/meme.jpg" alt="bad meme" class="meme" />
                </div>
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
                  So what's here then?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Sorry, still nothing! Please check back back later for a
                  proper FAQ.
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
</script>

<style scoped>
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
.meme {
  width: 100%;
  height: auto;
  max-width: 400px;
}
</style>