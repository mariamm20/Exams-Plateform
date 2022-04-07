<template>
  <header class="container">
    <nav class="navbar navbar-expand-lg">
      <span class="fs-4 title"
        ><a class="navbar-brand">
          <RouterLink to="/" exact
            >Online Exams <br />
            <span class="platform-word">Platform </span>
          </RouterLink></a
        ></span
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="nav">
          <li class="nav-item register-color">
            <a class="nav-link"
              ><RouterLink to="/Register">Register</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/Login">Login</RouterLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link happening-now"
              ><RouterLink to="/FAQ">FAQ</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><RouterLink to="/Contact-Us">Contact Us</RouterLink></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <section class="faq-section">
    <article>
      <div class="img-section">
        <img src="/src/img/6.jpg" />
      </div>
    </article>
    <article class="questions-section">
      <div class="accordion" id="accordionExample">
        <div class="">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the code of the exam?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Code of the Exam is a code generated when the exam accepted from the admin.
            </div>
          </div>
        </div>
        <div class="">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              how to get the code of the exam?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              You will recieve it in the notifications in your profile, Good Luck!
            </div>
          </div>
        </div>
        <div>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Where am I find my results?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              You will find it in 'Profile > Results History '.
            </div>
          </div>
        </div>
        <div>
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How am I find the aviable exams?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              You will find it in ' Profile > Aviable Exams'.
            </div>
          </div>
        </div>
        <div>
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              The Exam time ended and I didn't press Submit Button
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              It is okay your answers will automatically submitted, Don't Worry.
            </div>
          </div>
        </div>
        <div>
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How can I report that there is a problem?
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              You can simply 'Contact Us' in  the top right of the page and you will get the response your notifications.
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
<style scoped>
.faq-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.faq-section article {
  width: 50%;
}
.img-section img {
  width: 100%;
  height: 410px;
}
.questions-section {
  padding: 35px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 410px;
}
.accordion-item {
  border-radius: 30px !important;
  border: none;
}
.accordion-item button {
  border: 3px solid #efefef;
  border-radius: 30px;
}
.accordion-button {
  border-radius: 30px;
  border: 3px solid #efefef;
  margin-bottom: 15px;
  box-shadow: none;
}
.accordion-body {
  margin: 17px 0;
  border: 3px solid rgb(239, 239, 239);
  border-radius: 30px;
  text-align: justify;
  color:#797979;
}
@media (max-width: 992px) {
  .faq-section {
    flex-wrap: wrap;
  }
  .questions-section {
    padding: 15px;
  }
  .faq-section article {
    width: 100%;
  }
  .img-section img {
  width: 100%;
  height: auto;
}
.questions-section {
  overflow-x: hidden;
  overflow-y:auto ;
}
}
</style>
