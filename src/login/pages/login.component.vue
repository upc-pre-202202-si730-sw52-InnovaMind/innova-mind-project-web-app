<template>
  <div class="login">
    <table>
      <tr>
        <th>
          <img class="pi-images" src="../../assets/images/logoZenDriver.png">
        </th>
      </tr>
      <tr>
        <th>
          <h1>ZenDriver</h1>
        </th>
      </tr>
      <tr>
        <td>
          <p>Please fill in yor credentials</p>
        </td>
      </tr>
    </table>
    <pv-card class="card">
      <template #content>
        <span class="p-float-label">
          <pv-input-text class="p-input" v-model="users.email" type="text"/>
          <label for="users.email">Email or number telephone</label>
        </span>
        <span class="p-float-label">
          <pv-input-text class="p-input" v-model="users.password" type="password"/>
          <label for="users.password">Password</label>
        </span>
      </template>
      <template #footer>
        <pv-button class="p-button-label" icon="mr-2 mb-2" label="Log In"></pv-button>
        <br><br>
        <router-link id="router" to="/forgotPassword" class="p-button-label">Forgot password?</router-link>
        <br><br>
        <router-link id="router"  to="/register" class="p-button-label">Create account</router-link>
      </template>
    </pv-card>
    <pv-tag class="p-tag" >© 2022 Innova Mind.All your privacy is sure!</pv-tag>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  components: {
    // register components here
    // forgot-password component here
  },
  data () {
    return {
      accounts: [],
      submitted: false,
      users: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
    },

  }
}
</script>

<style scoped>
.login {
  box-sizing: border-box;
  position: absolute;
  width: 60%;
  height: 80%;
  left: 20%  ;
  margin-top: 5%;
  background: #02AAEE;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;
}
table{
  margin-top: 0%;
  width: 100%;
  height: 10%;
}
.pi-images {
  width: 10%;
  height: 20%;
  position: relative;
}
th, td{
  padding: 0;
  text-align: center;
  border-collapse: collapse;
  /*border: #000000 solid;*/
}
table p{
  font-size: small;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
table h1 {
  font-size: x-large;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.card{
  background-color: #007BBB;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 80%;
  height: 55%;
  margin-left: 10%;
  margin-top: 2%;
}
.p-tag{
  color: #FFFFFF;
  text-decoration: none;
  font-size: 2vh;
  margin-left: 30%;
  background-color: #02AAEE;
  margin-top: 1%;

}
.p-float-label{
  margin-left: 20%;
  padding: 0.5vh;
}
.p-button-label{
  margin-left: 30%;
  background-color: black;
  width: 40%;
  height: 10%;
}
.p-input{
  width: 80%;
  height: 10%;
  border: #000000 solid;
  border-radius: 2vh;
}
#router{
  background-color: #007BBB;
  color: #000000;
  margin-left: 40%;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 1vh;
}
#router:hover{
  background-color: #007BBB;
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
}
</style>