<script setup>
import AppHeaderVue from './AppHeader.vue';
</script>
<template>
<div class="d-flex">
<AppHeaderVue/>
  <section class="container">
    <div class="title">All Users</div>
    <div class="table-content">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            <th scope="col">Acadimic ID</th>
            <th scope="col">ID Password</th>
            <th scope="col">Image</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1234#</td>
            <td>Doctor</td>
            <td>16183000654828</td>
            <td>45fgrt</td>
            <td>Preview</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1234#</td>
            <td>Doctor</td>
            <td>16183000654828</td>
            <td>45fgrt</td>
            <td>Preview</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1234#</td>
            <td>Doctor</td>
            <td>16183000654828</td>
            <td>45fgrt</td>
            <td>Preview</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1234#</td>
            <td>Doctor</td>
            <td>16183000654828</td>
            <td>45fgrt</td>
            <td>Preview</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1234#</td>
            <td>Doctor</td>
            <td>16183000654828</td>
            <td>45fgrt</td>
            <td>Preview</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash-can"></i></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1234#</td>
            <td>Doctor</td>
            <td>16183000654828</td>
            <td>45fgrt</td>
            <td>Preview</td>
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
.fa-pen-to-square{
    color: rgb(48, 168, 228)
}
.fa-trash-can{
    color:rgb(250, 54, 54)
}
.table-content{
    border: 5px solid #efefef;
    border-radius: 30px;    
}

</style>