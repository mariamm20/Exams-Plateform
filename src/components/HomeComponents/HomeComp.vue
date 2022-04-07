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
            <a class="nav-link"><RouterLink to="/FAQ">FAQ</RouterLink></a>
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
  <section class="landing">
    <div class="qoute">
      <p>
        "Something inside you that<br />
        is greater than obstacle ... "
      </p>
      <span>Christion D. Larson</span>
    </div>
    <div class="info">
      <p>
        Your platform to create<br />
        online exams for your<br />
        students
      </p>
      <button>Get Started</button>
    </div>
  </section>
  <section class="landing section-two">
    <div class="mission">
      <h2>OUR MISSION</h2>
      <p>
        Our mission is using one platform<br />
        for examinations. Reduce paperwork<br />
        and offering quick and accurate<br />
        results.
      </p>
    </div>
    <div class="sleepy-img">
      <img src="/src/img/1.png" alt="mission" />
    </div>
  </section>
  <section class="landing section-two section-three">
    <div class="sleepy-img">
      <img src="/src/img/3.jpg" alt="mission" />
    </div>
    <div class="vision mission">
      <h2>OUR VISION</h2>
      <aside
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <aside class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </aside>
        <aside class="carousel-inner">
          <p class="carousel-item active">
            Online Exam System is more popularly<br />
            helps for our modern age system.
          </p>
          <p class="carousel-item">
            It helps us to use the present technology<br />
            into examiantion system.<br />
          </p>
          <p class="carousel-item">
            Our mission is using one platform<br />
            for examinations. Reduce paperwork.<br />
          </p>
        </aside>
        <br />
      </aside>
    </div>
  </section>
  <section class="container section-four">
    <div class="about">
      <h2>ABOUT US</h2>
      <p>
        Online examination System is conducting a test online to measure the
        knowledge<br />
        of the participants on a given topic. In the olden days everybody<br />
        had to gather in a classroom at the same time to take an exam.
      </p>
    </div>
    <div class="about-part-two">
      <div>
        <p>
          With online examination students can do<br />
          the exam online, in their own time and<br />
          with their own device, regardless where<br />
          they life. You online need a browser and<br />
          internet connection.
        </p>
      </div>
      <div class="img-class"><img src="/src/img/2.png" alt="about" /></div>
    </div>
  </section>
  <section>
      <footer>
          <p>&copy;Copyright KSU 2021-2022</p>
      </footer>
  </section>
</template>





<style scoped>

.landing {
  display: flex;
  flex-wrap: wrap;
}
.landing div {
  width: 50%;
  padding: 107px 55px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.qoute p {
  text-align: justify;
}
.qoute span {
  font-family: FreeStyle Script;
  width: 100%;
  text-align: right;
}
.info button {
  font-size: 14px;
  background-color: #fff;
  border: 3px solid #afcbff;
  color: #1eaaf1;
  border-radius: 5px;
  padding: 7px 15px;
}
.qoute {
  background-color: #ffede1;
}
.info {
  background-color: #d7f9ff;
}

.mission h2 {
  position: relative;
  bottom: 10px;
}
.mission p {
  font-size: 18px;
  text-align: justify;
  color: #797979;
  line-height: 30px;
}

.sleepy-img img {
  width: 536px;
  height: 363px;
}
.section-two div {
  width: 50%;
  padding: 0 55px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.section-two {
  padding: 0 86px;
}
.section-three {
  background-color: #64c0bf;
}
.vision {
  color: #fff;
  padding: 0 0 0 122px;
}
.vision p {
  color: #fff;
}
.section-three .sleepy-img {
  padding: 0;
}
.section-four {
  text-align: left;
  padding: 107px 124px;
}

.section-four p {
  letter-spacing: 1.5px;
  text-align: justify;
  line-height: 30px;
  color: #797979;
}
.section-four img {
  width: 575px;
}
.about-part-two {
  display: flex;
}

footer p{
    margin-bottom: 0;
}
footer{
    padding: 10px;
    background-color: #d7f9ff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}
@media (max-width: 1200px) {
  .section-four {
    text-align: left;
    padding: 107px 23px;
  }
}
@media (max-width: 991px) {
  .about-part-two {
    flex-wrap: wrap;
  }
  .section-four {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section-four img {
    width: 415px;
  }
  .img-class {
    width: 100%;
    text-align: center;
  }
  .navbar-collapse{
    align-items: center;
    border: 5px solid #efefef;
    border-radius: 30px;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
}
.nav{
    flex-direction: column;
}
.nav button{
    box-shadow: none;
}
}

@media (max-width: 1024px) {
  .sleepy-img img {
    width: 363px;
    height: 315px;
  }
  .sleepy-img {
    padding: 0;
  }
  .section-two {
    padding: 20px;
  }
  .section-two div {
    padding: 0;
  }
}
@media (max-width: 768px) {
  .landing div {
    width: 100%;
  }
  .section-two div {
    width: 100%;
    align-items: center;
  }
  .section-four {
    padding: 33px 23px;
  }
  .section-four {
    text-align: center;
  }
}
@media (max-width: 510px) {
  .section-four img {
    width: 245px;
  }
  .navbar-brand{
      left:20px
  }
}
</style>
