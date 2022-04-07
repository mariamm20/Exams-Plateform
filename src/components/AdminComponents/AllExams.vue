<script setup>
import AppHeaderVue from "./AppHeader.vue";
</script>
<template>
<div class="d-flex">
  <AppHeaderVue />
  <section class="container">
    <div class="title">All Exams</div>
    <div class="table-content">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Exam Name</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Score</th>
            <th scope="col">Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Status</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1001</th>
            <td>Physics 101</td>
            <td>John Ebraham</td>
            <td>50</td>
            <td>9-4-2022</td>
            <td>9:00 am</td>
            <td>11:00 am</td>
            <td>Accepted</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1001</th>
            <td>Physics 101</td>
            <td>John Ebraham</td>
            <td>50</td>
            <td>9-4-2022</td>
            <td>9:00 am</td>
            <td>11:00 am</td>
            <td>Accepted</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1001</th>
            <td>Physics 101</td>
            <td>John Ebraham</td>
            <td>50</td>
            <td>9-4-2022</td>
            <td>9:00 am</td>
            <td>11:00 am</td>
            <td>Accepted</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1001</th>
            <td>Physics 101</td>
            <td>John Ebraham</td>
            <td>50</td>
            <td>9-4-2022</td>
            <td>9:00 am</td>
            <td>11:00 am</td>
            <td>Accepted</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1001</th>
            <td>Physics 101</td>
            <td>John Ebraham</td>
            <td>50</td>
            <td>9-4-2022</td>
            <td>9:00 am</td>
            <td>11:00 am</td>
            <td>Accepted</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1001</th>
            <td>Physics 101</td>
            <td>John Ebraham</td>
            <td>50</td>
            <td>9-4-2022</td>
            <td>9:00 am</td>
            <td>11:00 am</td>
            <td>Accepted</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
        </tbody>
      </table>
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
.fa-pen-to-square {
  color: rgb(48, 168, 228);
}
.fa-trash-can {
  color: rgb(250, 54, 54);
}
</style>
