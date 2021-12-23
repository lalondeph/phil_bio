<template>
  <div class="container">
    <div class="col-sm"></div>
    <div class="col-sm">
      <div class="row top-row mb-5">
        <span class="made-it-txt">
          <span>You made it! </span>
          <span class="avoidwrap">My name is</span>
        </span>

        <div class="name-txt">
          <span class="first-name">Philip</span>
          <span class="last-name avoidwrap">Lalonde</span>
        </div>
      </div>

      <div class="row bio">
        <div class="col-md-4" align="center">
          <div>
            <img
              class="rounded bio-img mb-5"
              src="../assets/bio.jpg"
              alt="Philip Lalonde"
            />
          </div>
        </div>
        <div class="col-md-8">
          <div class="lead text-success about-me">
            <p class="mb-4">
              I'm glad you stopped by. I recently left the lawn care industry to
              pursue a career in IT. It has been a wild ride so far and I am
              excited to keep learning.
            </p>
            <p class="mb-5">
              Right now I am passionate about Laravel, Vue.js, MVC, Git,
              JavaScript, PHP, and debugging. I have a lot to learn, but with
              blazing fast google speed, intelligent questions for Senior Devs,
              and a positive attitude I'm confident we can solve the next
              problem and ship on time. Reach me in person via my contact page
              (free lawn advice available). I am eager to collaborate and I
              would love to take a look at your project.
            </p>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 summary mb-5">
        <div class="col mb-5">
          <div class="card text-center h-100 border-success">
            <div class="card-body">
              <h5 class="card-title">Junior Developer</h5>
              <p class="card-text">
                Graduating from the Computer Programmer Analyst program at St.
                Lawrence College spring of 2022. Download my resume for more
                information.
              </p>
            </div>
            <div class="card-footer bg-transparent border-success">
              <a
                href="/Philip-Lalonde-Resume.pdf"
                class="btn stretched-link text-success"
                role="button"
                download="Philip-Lalonde-Resume.pdf"
              >
                <i class="bi bi-file-pdf-fill text-danger"></i>My Resume
              </a>
            </div>
          </div>
        </div>

        <div class="col mb-5">
          <div class="card text-center h-100 border-success">
            <div class="card-body">
              <h5 class="card-title">Working At</h5>
              <p class="card-text">
                Working as a software engineer at Elentra, and loving every
                minute of it. Elentra is a leading innovator in competency based
                medical education. Connect on linkedin to see my career
                experiences.
              </p>
            </div>
            <div class="card-footer bg-transparent border-success">
              <div>
                <a
                  href="https://www.linkedin.com/in/philip-lalonde/"
                  target="_blank"
                  class="btn stretched-link text-success"
                  role="button"
                >
                  <i class="bi bi-linkedin text-primary"></i>
                  My Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col mb-5">
          <div class="card text-center h-100 border-success">
            <div class="card-body">
              <h5 class="card-title">About</h5>
              <p class="card-text">
                Will I be a good fit for your team? What kind of memes will I
                send everyone on slack? Great questions! Get to know me in the
                About section.
              </p>
            </div>
            <div class="card-footer bg-transparent border-success">
              <div class="text-success">
                <router-link
                  to="/About"
                  class="btn stretched-link text-success"
                  role="button"
                >
                  <i class="bi bi-person-fill text-secondary"></i> About
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.components {
  margin-bottom: 1em;
}
.made-it-txt {
  font-weight: 100;
  font-size: 2.5em;
  color: #a76f00;
  padding-left: 0.3em;
  padding-right: 10px;
}
.name-txt {
  color: #ffaa00;
}
.first-name {
  font-size: 8em;
}
.last-name {
  font-size: clamp(4em, 20vw, 8em);
}
.made-it-txt,
.name-txt {
  line-height: 0.99;
}
span.avoidwrap {
  display: inline-block;
}
.bio-img {
  width: 100%;
  height: auto;
  max-width: 350px;
  margin-bottom: 3%;
}
.footer-txt {
  color: #a76f00;
}
.about-me {
  min-width: 30px;
}
.card-footer {
  position: relative;
}
</style>