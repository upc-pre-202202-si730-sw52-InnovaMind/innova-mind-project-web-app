<template>
  <div class="login">
    <pv-button class="p-button-link" icon="pi pi-arrow-left" @click="landingPage()"/>
    <div class="container-init">
      <img class="image-company" src="../../assets/images/logoZenDriver.png" alt="Image of company">
      <h1>ZenDriver</h1>
      <p>Please fill in yor credentials</p>
    </div>
    <pv-card class="card">
      <template #content>
        <span class="p-float-label">
          <pv-input-text class="p-input" v-model="user.email" type="text" placeholder="Email" :disabled="flag"/>
          <span v-if="!user.email" class="p-error">Email is required.</span>
        </span>
        <span class="p-float-label">
          <pv-input-text class="p-input" v-model="user.password" type="password" placeholder="Password" :disabled="flag"/>
          <span v-if="!user.password" class="p-error">Password is required.</span>
        </span>
        <pv-button @click="submitForm" class="p-button-raised button"  icon="mr-2 mb-2" label="Log In" :isabled="flag"></pv-button>
        <router-link id="router" to="/forgot-password" class="p-button-label">Forgot password?</router-link>
        <router-link id="router"  to="/register" class="p-button-label">Create account</router-link>
      </template>
    </pv-card>
    <div class="container">
      <pv-tag class="p-tag" >© 2022 Innovate Mind.All your privacy is sure!</pv-tag>
    </div>
  </div>

  <div>
    <Dialog :show="showDialog"  :cancel="cancel" title="Invalid credentials" description="Please enter a correct email and password" />
    <Dialog :show="ShowErrorEmail" :cancel="closeErrorEmail" title="Enter a Email" description="Please enter a correct email" />
    <Dialog :show="showErrorPassword" :cancel="closeErrorPassword" title="Enter a Password" description="Please enter a correct password" />
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email,  maxLength, minLength} from '@vuelidate/validators'
import {computed, reactive} from "vue";
import Dialog  from "@/login/pages/Dialog.vue";
import { loginApiService } from "@/login/services/login-api.service";

export default {
  name: "LoginComponent",
  props: ['show', 'description', 'title', 'close'],
  components: {
    Dialog,
    loginApiService
  },
  data () {
    return {
      v$: useValidate(),
      submitted: false,
      user: {
        email: '',
        password: '',
      },
      account: {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        token: '',
        role: '',
      },
      showDialog: false,
      ShowErrorEmail: false,
      showErrorPassword: false,
      flag: false,
      logged: false,
    }
  },

  created() {
    this.service = new loginApiService();
  },
  mounted() {
    if(localStorage.getItem('id')) {
      if(localStorage.getItem('role') === 'driver') {
        this.$router.push('/driver/home');
      } else {
        this.$router.push('/company/home');
      }
    }
    else{
      this.$router.push('/login');
    }
  },
  setup() {
    const state = reactive({
      user: {
        email: '',
        password: ''
      }
    })
    const rules = computed(() => {
      return {
        user: {
          email: {
            required,
            email
          },
          password: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(16)
          }
        },
      }
    })
    const v$ = useValidate(state, rules)

    return {
      state,
      v$
    }
  },

  methods: {
    landingPage() {
      window.location.href = `https://upc-pre-202202-si730-sw52-innovamind.github.io/`;
    },

    submitForm() {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      if(this.user.email === '' && this.user.password === '') {
        this.showDialog = true;
        this.flag = true;
      }
      else if(this.user.email !== '' && this.user.password === '') {
        this.showErrorPassword = true;
        this.flag = true;
      }
      else if(this.user.password !== '' && this.user.email === '') {
        this.ShowErrorEmail = true;
        this.flag = true;
      }
      else {
        let UserRequest = {
          username: this.user.email,
          password: this.user.password
        }
        this.service.getUser(UserRequest).then(response=> {
          this.account = response.data;
          console.log(response.data);
          localStorage.setItem('id', this.account.id);
          localStorage.setItem('role', this.account.role);
          localStorage.setItem('token', this.account.token);
        });

        this.logged = true;
        if(this.account.role === 'driver') {
          this.$router.push("/driver/home");
        }
        else {
          this.$router.push("/company/home");
        }
      }
    },
    cancel() {
      this.showDialog = false;
      this.flag = false;
    },
    closeErrorEmail() {
      this.ShowErrorEmail = false;
      this.flag = false;
    },
    closeErrorPassword() {
      this.showErrorPassword = false;
      this.flag = false;
    }
  },

}
</script>

<style scoped>
.login {
  box-sizing: border-box;
  position: absolute;
  width: 60%;
  height: 80%;
  top:10%;
  left: 20%;
  background: #02AAEE;
  border: 1px solid #000000;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;
}

.container-init {
  width:80%;
  height: 30%;
  text-align: center;
  margin: auto auto;
}

.image-company{
  width: 20%;
  height: 40%;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

p{
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.card{
  background-color: #007BBB;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 80%;
  height: 50%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.p-input{
  width: 100%;
  height: 10%;
  border: #000000 solid;
  border-radius: 2vh;
}

.p-float-label{
  padding: 0.5vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.button {
  margin: auto auto;
  background-color: black;
  color: white;
  display: inline-block;
}

#router{
  background-color: #007BBB;
  color: #000000;
  align-items: center;
  font-size: 2.5vh;
  padding: 0.5vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

#router:hover {
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
  padding: 0.5vh;
}

.container {
  text-align: center;
  padding: 1vh;
}

.p-tag{
  color: #FFFFFF;
  text-decoration: none;
  font-size: 2vh;
  background-color: #02AAEE;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .login {
    box-sizing: border-box;
    position: absolute;
    width: 90%;
    height: 80%;
    top:10%;
    left: 5%;
    background: #02AAEE;
    border: 1px solid #000000;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;
  }

  .container-init {
    width:80%;
    height: 30%;
    text-align: center;
    margin: auto auto;
  }

  .image-company{
    width: 20%;
    height: 40%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  p{
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  .card{
    background-color: #007BBB;
    border: 1px solid #000000;
    border-radius: 20px;
    width: 90%;
    height: 50%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  .p-input{
    width: 100%;
    height: 10%;
    border: #000000 solid;
    border-radius: 2vh;
  }

  .p-float-label{
    padding: 0.5vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  .button {
    margin: auto auto;
    background-color: black;
    color: white;
    display: inline-block;
  }

  #router{
    background-color: #007BBB;
    color: #000000;
    align-items: center;
    font-size: 2.5vh;
    padding: 0.5vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #router:hover {
    text-decoration: underline;
    text-align: center;
    font-weight: bold;
    padding: 0.5vh;
  }

  .container {
    text-align: center;
    padding: 1vh;
  }

  .p-tag{
    color: #FFFFFF;
    text-decoration: none;
    font-size: 2vh;
    background-color: #02AAEE;
    text-align: center;
  }
}
</style>