<script setup>
import AppHeaderVue from './AppHeader.vue';
</script>
<template>
<div class="d-flex">
<AppHeaderVue/>
  <section class="container">
    <div class="title">Dashboard</div>
    <div class="dashboard-cards">
      <div class="card">
        <div class="card-body">
          <div>
            <p class="category text-info">Docotrs</p>
            <p class="number">40</p>
          </div>
          <div class="icon">
            <i class="fa-solid fa-user-tie"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div>
            <p class="category">Students</p>
            <p class="number">2566</p>
          </div>
          <div class="icon">
            <i class="fa-solid fa-people-group"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div>
            <p class="category text-warning">Exams Request</p>
            <p class="number">38</p>
          </div>
          <div class="icon">
            <i class="fa-solid fa-memo-circle-info"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div>
            <p class="category text-success">Finished Exams</p>
            <p class="number">10</p>
          </div>
          <div class="icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div>
            <p class="category text-primary" style="#5fc879">Success</p>
            <p class="number">2400</p>
          </div>
          <div class="icon">
            <i class="fa-solid fa-thumbs-up"></i>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div>
            <p class="category text-danger">Failure</p>
            <p class="number">116</p>
          </div>
          <div class="icon">
            <i class="fa-solid fa-thumbs-down"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-img">
      <img src="/src/img/dashboard.jpg" height="160" />
    </div>
  </section>
  </div>
</template>
<style scoped>
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
.dashboard-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dashboard-cards .card {
  width: 275px;
  border: 5px solid #efefef;
  border-radius: 15px;
  margin-bottom: 20px;
}
.dashboard-cards .card-body {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
}

.category {
  font-size: 22px;
}
.number {
  float: left;
  font-size: 20px;
  color: #5c5c5c;
}
.icon {
  font-size: 28px;
}
.dashboard-img {
  float: right;
}
.container{
    padding: 0 45px;
}
@media (max-width:768px) {
    .container {
        padding: 15px;
    }
    .dashboard-cards {
  justify-content: space-evenly;
}
}
@media (max-width:1035px) {
  .dashboard-cards {
  justify-content: space-evenly;
}   
}
</style>

