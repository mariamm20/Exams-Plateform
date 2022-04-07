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
            <a class="nav-link happening-now"
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
  <section class="section-one">
    <div class="image-section">
      <img src="/src/img/4.png" alt="img" />
    </div>
    <div class="form-section">
      <form action="" method="Post">
        <h4>Registration</h4>
        <fieldset class="inputs">
          <input
            type="text"
            class="form-control"
            placeholder="Your Name"
            v-model="user.name"
          />
          <lable
            v-if="v$.user.email.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Email error"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <input
            type="text"
            placeholder="Acadimic ID"
            v-model="user.acadimic_id"
          />
          <lable
            v-if="v$.user.acadimic_id.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Acadimic ID error"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <input
            type="text"
            placeholder="Password in Acadimic ID"
            v-model="user.id_password"
          />
          <lable
            v-if="v$.user.id_password.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Password Error"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <input type="email" placeholder="Email" v-model="user.email" />
          <lable
            v-if="v$.user.email.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Email error"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <input
            type="password"
            placeholder="Password"
            v-model="user.password"
          />
          <lable
            v-if="v$.user.password.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Password error"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <input
            type="password"
            v-model="user.repeated"
            placeholder="Repeat Password"
          />
          <lable
            v-if="v$.user.repeated.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Not the same password"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <select v-model="user.selected">
            <option disabled>Choose Role</option>
            <option value="doctor">Doctor</option>
            <option value="student">Student</option>
          </select>
          <lable
            v-if="v$.user.selected.$error"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Must select a role"
          >
            <i class="fa-solid fa-circle-info"></i>
          </lable>
          <div id="btn-div">
            <button @click.prevent="onRegister()">Register</button>
          </div>
          <p>All ready have an account?<span> Log In</span></p>
        </fieldset>
      </form>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
export default {
  name: "Home",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: {
        name: null,
        acadimic_id: null,
        id_password: null,
        email: null,
        password: null,
        repeated: null,
        selected: "Choose Role",
      },
    };
  },
  validations() {
    return {
      user: {
        name: { required }, // Matches this.firstName
        acadimic_id: { required, maxLength: maxLength(16) }, // Matches this.lastName
        id_password: { required, maxLength: maxLength(7) },
        email: { required, email },
        password: { required },
        repeated: { required, sameAs: sameAs(this.user.password) },
        selected: { required },
      },
    };
  },
  methods: {
    onRegister() {
      this.v$.$validate();
      if (!this.v$.$error) {
        var data = new FormData();
        data.append("name", this.user.name);
        data.append("acadimic_id", this.user.acadimic_id);
        data.append("id_password", this.user.id_password);
        data.append("email", this.user.email);
        data.append("password", this.user.password);
        data.append("role", this.user.selected);

        axios
          .post(
            "http://localhost/Plateform/src/Api/api.php?action=addusers",
            data
          )
          .then((res) => {
            if (res.data.error) {
              console.log("Error", res.data);
              alert(res.data.message);
            } else {
              console.log("Success", res.data.message);
              alert(res.data.message);
              this.$router.push({ path: "/Login" });
            }
          })
          .catch((err) => {
            console.log("Error", err);
          });
      } else {
        // if (this.v$.user.email.$error) {
        //   alert("please email fill all field");
        // } else if (this.v$.user.id_password.$error) {
        //   alert("please id password fill all field");
        // }
        alert("error");
      }
    },
  },
};
</script>
<style scoped>
lable {
  width: fit-content;
  position: relative;
  left: 103%;
  /* top: -40px; */
  bottom: 40px;
  height: 0;
}
.happening-now {
  background-color: #efefef;
  border-radius: 15px;
}
.section-one {
  display: flex;
}
.section-one div {
  width: 50%;
}
.section-one img {
  width: 100%;
}
form {
  background: linear-gradient(90deg, #ffede1 12%, #afcbff, #d7f9ff);
  border-radius: 30px;

  padding: 30px 50px 0 50px;
}
.form-section {
  display: flex;
  justify-content: center;
}
form h4 {
  text-align: left;
  margin-bottom: 15px;
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
  color: #0e1c36;
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
form button:hover {
  background: linear-gradient(90deg, #ffede1, #afcbff, #d7f9ff);
  color: #0e1c36;
  font-weight: bold;
}
#btn-div {
  width: 100%;
  text-align: center;
}
form p {
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
}
form span {
  color: #1eaaf1;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .section-one {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
  .section-one div {
    width: 100%;
  }
  .image-section img {
    width: 55%;
  }
  form {
    width: 60%;
  }
}
@media (max-width: 768px) {
  form {
    width: auto;
  }
}
@media (max-width: 440px) {
  .section-one {
    padding: 15px;
  }
  form {
    padding: 30px 20px 0 20px;
  }
  .image-section img {
    width: 100%;
  }
  ::-webkit-input-placeholder {
    font-size: 12px;
  }
  fieldset input {
    font-size: 12px;
  }
}
</style>
