<template>
  <div class="d-flex flex-column flex-shrink-0 p-3" style="width: 280px">
    <a
      href="/"
      class="d-flex col align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4"
        ><a class="navbar-brand">
          <RouterLink to="/" exact
            >Online Exams <br />
            <span class="platform-word">Platform </span>
          </RouterLink></a
        ></span
      >
    </a>
    <ul class="navbar-nav nav-pills flex-column mb-auto elements">
      <li class="nav-item">
        <a class="nav-link" aria-current="page"
          ><RouterLink to="/dashboard" exact
            ><font-awesome-icon icon="fa-solid fa-gauge" /><i
              class="fa-solid fa-palette"
            ></i>
            Dashboard</RouterLink
          ></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" aria-current="page"
          ><RouterLink to="/dashboard/all-users"
            ><i class="fa-solid fa-users"></i> All Users</RouterLink
          ></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" aria-current="page"
          ><RouterLink to="/dashboard/exams-requests"
            ><i class="fa-solid fa-memo-circle-info"></i> Exams
            Requests</RouterLink
          ></a
        >
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" aria-current="page"
          ><RouterLink to="/dashboard/all-exams"
            ><i class="fa-solid fa-border-all"></i> All Exams</RouterLink
          ></a
        >
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" aria-current="page"
          ><RouterLink to="/dashboard/contact-us"
            ><i class="fa-solid fa-message-middle"></i> Contact Us</RouterLink
          ></a
        >
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" aria-current="page"
          ><RouterLink to="/dashboard/sign-out"
            ><i class="fa-solid fa-arrow-right-from-bracket"></i> Sign
            out</RouterLink
          ></a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>

div {
  text-align: center;
}
nav {
  justify-content: center;
  display: flex;
}
a.router-link-active {
  color: #bbb;
}
.navbar-brand{
  left:0
}
.navbar-brand a {
  font-size: 28px;
}
.platform-word {
  letter-spacing: 4px;
  font-size: 24px;
}
.elements {
  align-items: flex-start;
  border: 5px solid #efefef;
  border-radius: 30px;
  position: relative;
  top: 30px;
}
.elements li {
  padding: 15px;
  padding-left: 30px;
}
.title {
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 15px;
  margin-bottom: 27px;
  font-size: 26px;
  border: 5px solid #d7f9ff;
  /* background: linear-gradient(180deg, #d7f9ff 0%, #fff); */
  border-radius: 30px;
}
.table-content {
  border: 5px solid #efefef;
  border-radius: 30px;
}

@media (max-width: 768px) {
  #app {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
