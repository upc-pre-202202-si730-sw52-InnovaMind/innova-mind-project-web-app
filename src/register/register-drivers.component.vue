<template>
    <div class="flex justify-content-center bg-cyan-500">
        <form class="w-8 register-drivers mb-3">
            <div class="mb-4 field col-12">
                <h1>Get Started With InnovaMind</h1>
                <h5 class="text-50">Please, tell us about you</h5>
            </div>
            <div class="flex justify-content-center p-fluid formgrid grid">
                <div class="field col-12 md:col-4">
                    <label for="first_name">First Name</label>
                    <pv-input-text type="text" v-model="driver.first_name" />
                  <span v-if="!driver.first_name" class="p-error">Firstname is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="last">Last Name</label>
                    <pv-input-text type="text" v-model="driver.last_name" />
                    <span v-if="!driver.last_name" class="p-error">Lastname is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="phone">Phone</label>
                    <pv-input-text type="tel" v-model="driver.phone" />
                    <span v-if="!driver.phone" class="p-error">Phone is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="email">Email</label>
                    <pv-input-text type="email" v-model="driver.email" />
                    <span v-if="!driver.email" class="p-error">Email is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="password">Password</label>
                    <pv-input-text type="password" v-model="driver.password" />
                    <span v-if="!driver.password" class="p-error">Password is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="pass">Confirm Password</label>
                    <pv-input-text type="password" v-model="pass" />
                    <span v-if="driver.password!==pass" class="p-error">Do not match password</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="license">Type of license</label>
                    <pv-dropdown
                        v-model="driver.license"
                        :options="licenseList"
                        placeholder="Select a License"
                    />
                    <span v-if="!driver.license" class="p-error">License is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="country">Country</label>
                    <pv-input-text type="text" v-model="driver.country" />
                    <span v-if="!driver.country" class="p-error">Country is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">Region</label>
                    <pv-input-text type="text" v-model="driver.region" />
                    <span v-if="!driver.region" class="p-error">Region is required.</span>
                </div>

                <pv-button
                    label="Register"
                    class="p-button-rounded w-10rem"
                    @click="SubmitForm"
                />
            </div>
        </form>
    </div>
  <div>
    <Dialog :show="showDialog"  :cancel="cancel" title="This email has been registered" description="Please enter another email to created your account" />
    <Dialog :show="showError"  :cancel="cancelError" title="Please fill in the fields required" description="Please fill in all the fields required" />
    <Dialog :show="showSuccess"  :cancel="closeDialog" title="Registered successfully" description="Go to home and enter your account to init session" />
    <Dialog :show="showMismatchPassword"  :cancel="validatePassword" title="Confirm the same password" description="Please add the same password to confirm your password" />
  </div>
</template>

<script>
import { LoginApiService } from "@/login/services/login-api.service";
import Dialog from "@/login/pages/Dialog.vue";
import {computed, reactive} from "vue";
import {email, maxLength, minLength, required} from "@vuelidate/validators";
import useValidate from "@vuelidate/core";


export default {
  props: ['show', 'description', 'title', 'close'],
  components: {
    Dialog
  },
  setup() {
    const state = reactive({
      driver: {
        id: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        license: "",
        country: "",
        region: "",
      },
    });
    const rules = computed(() => {
      return {
        driver: {
          first_name: {
            required,
          },
          last_name: {
            required,
          },
          phone: {
            required,
          },
          email: {
            required,
            email,
          },
          password: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(16),
          },
          license: {
            required,
          },
          country: {
            required,
          },
          region: {
            required,
          },
        },
      }
    })
    const v$ = useValidate(state, rules)
    return {
      state,
      v$
    }
  },
  data() {
    return {
      licenseList: [
        "A-I",
        "A-IIa",
        "A-IIb",
        "A-IIIa",
        "A-IIIb",
        "A-IIIc",
      ],
      UserRequest: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        phone: '',
        role: '',
        description: '',
        imageUrl: 'https://th.bing.com/th/id/R.d995d728def36a40a261e36bab9f9bfe?rik=KbovzdNLdAjNdg&pid=ImgRaw&r=0',
      },
      driver: {
        id: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        license: '',
        country: '',
        region: '',
      },
      DriverRequest: {
        userId: '',
      },
      pass: "",
      showDialog: false,
      registered: false,
      showError: false,
      showSuccess: false,
      showMismatchPassword: false,
    };
  },
  created() {
    this.service = new LoginApiService();

  },
  methods: {
    cancel() {
      this.showDialog = false;
    },
    cancelError() {
      this.showError = false;
    },
    closeDialog() {
      this.showSuccess = false;
      this.$router.push("/login");
    },
    validatePassword() {
      this.showMismatchPassword = false;
    },

    async AddUserDriver (id) {
      this.DriverRequest.userId = id;
      await this.service.postDriver(this.DriverRequest).then((response) => {
        console.log(response);
        if(response.status ==  201)
        {
          console.log(response.data)
          this.router.push("/login");
        }
      });
    },

    },

    async GetUser (username, password){
      let user = {
        username: username ,
        password: password,
      }
      await this.service.getUser(user).then((response) => {
       if(response.status === 200) {
         localStorage.setItem('id', response.data.id);
         if(response.status === 200) {
           console.log(response.data)
           this.showSuccess = true;
           this.AddUserDriver(response.data.id);

         }
       }
      });
    },

    async AddUser() {
      this.UserRequest.firstName = this.driver.first_name;
      this.UserRequest.lastName = this.driver.last_name;
      this.UserRequest.username = this.driver.email;
      this.UserRequest.password = this.driver.password;
      this.UserRequest.phone = this.driver.phone;
      this.UserRequest.role = "driver";
      this.UserRequest.description = "I am a driver" + " " + this.driver.first_name + " " + this.driver.last_name;

      await this.service.postUser(this.UserRequest).then((response) => {
        if(response.status === 200) {
          this.GetUser(this.UserRequest.username, this.UserRequest.password);
        }
      });
    },

    SubmitForm() {
      if(this.driver.first_name !== "" && this.driver.last_name !== "" && this.driver.phone !== "" && this.driver.email !== ""
          && this.driver.password !== "" && this.driver.license !== "" && this.driver.country !== "" && this.driver.region !== ""
          && this.pass !== ""){
        if (this.pass === this.driver.password) {
          this.AddUser();
        }
        else {
          this.showMismatchPassword = true;
        }
      }
      else {
        this.showError = true;
      }
    },
  };
</script>

<style>
* {
    margin: 0;
}
</style>
