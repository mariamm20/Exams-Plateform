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
            <a class="nav-link happening-now"
              ><RouterLink to="/Contact-Us">Contact Us</RouterLink></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
<section class="section-one">
    <div class="image-section">
      <img src="/src/img/7.jpg" alt="img" />
    </div>
    <div class="form-section">
      <form>
        <h4>Contact Us</h4>
        <fieldset class="inputs">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea  placeholder="What is your problem?" required />          
          <div id="btn-div">
            <button>Send </button>
          </div>
          
        </fieldset>
      </form>
    </div>
  </section>
</template>

<style scoped>

.section-one {
  display: flex;
  flex-direction: row-reverse;
}
.section-one div {
  width: 50%;
}
.section-one img {
  width: 65%;
}
form {
  background: linear-gradient(90deg, #ffede1 12%, #afcbff, #d7f9ff);
  border-radius: 30px;
  width: 60%;
  padding: 30px 50px 30px 50px;
}
.form-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
form h4 {
  text-align: left;
  margin-bottom: 30px;
  font-size: 20px;
}
fieldset {
  display: flex;
  flex-direction: column;
}
fieldset input {
  border-radius: 20px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 3px solid #efefef;
  font-size: 14px;
  outline: none;
}
textarea{
    border-radius: 20px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 3px solid #efefef;
  font-size: 14px;
  outline: none;
}
::-webkit-input-placeholder {
  color: #b4b4b4;
}
fieldset select {
  border-radius: 20px;
  border: 3px solid #efefef;
  padding: 5px 10px;
  outline: none;
  font-size: 14px;
  margin-bottom: 10px;
}
select option {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  color: #0E1C36;
}
form button {
  border: 3px solid #efefef;
  padding: 8px 6px;
  background-color: #fff;
  width: 120px;
  border-radius: 22px;
  font-size: 14px;
  color: #1eaaf1;
}
form button:hover{
  background: linear-gradient(90deg, #ffede1, #afcbff, #d7f9ff);
  color: #0E1C36;
  font-weight: bold;
}
#btn-div{
  width: 100%;
  text-align: center;
}
form p{
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
}
form span{
  color: #1eaaf1;
  font-weight: 600;
}
@media (max-width:1024px) {
  .section-one {
  flex-wrap: wrap-reverse;
  justify-content: center;
}
.section-one div {
  width: 100%;
}
.image-section img{
  width:55%
}
}
@media (max-width:768px) {
  form{width:auto}
}
@media (max-width:440px) {
  .section-one{
    padding: 15px;
  }
  form{
    padding: 30px 20px 30px 20px;
  }
  .image-section img{
  width:100%
}
}
</style>
