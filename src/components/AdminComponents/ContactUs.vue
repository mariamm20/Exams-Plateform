<script setup>
import AppHeaderVue from "./AppHeader.vue";
</script>
<template>
  <div class="d-flex">
    <AppHeaderVue />
    <section class="container">
      <div class="title">Contact Us</div>
      <div class="table-content">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Preview</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1001</th>
              <td>Physics 101</td>
              <td>John Ebraham</td>
              <td>50</td>
              <td><i class="fa-solid fa-eye"></i></td>
              <td><i class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr>
              <th scope="row">1001</th>
              <td>Physics 101</td>
              <td>John Ebraham</td>
              <td>50</td>
              <td><i class="fa-solid fa-eye"></i></td>
              <td><i class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr>
              <th scope="row">1001</th>
              <td>Physics 101</td>
              <td>John Ebraham</td>
              <td>50</td>
              <td><i class="fa-solid fa-eye"></i></td>
              <td><i class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr>
              <th scope="row">1001</th>
              <td>Physics 101</td>
              <td>John Ebraham</td>
              <td>50</td>
              <td><i class="fa-solid fa-eye"></i></td>
              <td><i class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr>
              <th scope="row">1001</th>
              <td>Physics 101</td>
              <td>John Ebraham</td>
              <td>50</td>
              <td><i class="fa-solid fa-eye"></i></td>
              <td><i class="fa-solid fa-trash-can"></i></td>
            </tr>
            <tr>
              <th scope="row">1001</th>
              <td>Physics 101</td>
              <td>John Ebraham</td>
              <td>50</td>
              <td><i class="fa-solid fa-eye"></i></td>
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
.fa-trash-can {
  color: rgb(250, 54, 54);
}
.fa-eye {
  color: rgb(48, 168, 228);
}
</style>
