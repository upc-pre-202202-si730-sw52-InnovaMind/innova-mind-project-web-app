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
                    <pv-input-text type="text" v-model="company.first_name" />
                  <span v-if="!company.first_name" class="p-error">Firstname is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="last">Last Name</label>
                    <pv-input-text type="text" v-model="company.last_name" />
                  <span v-if="!company.last_name" class="p-error">Lastname is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="phone">Phone</label>
                    <pv-input-text type="tel" v-model="company.phone" />
                  <span v-if="!company.phone" class="p-error">Phone is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="email">Email</label>
                    <pv-input-text type="email" v-model="company.email" />
                    <span v-if="!company.email" class="p-error">Email is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="password">Password</label>
                    <pv-input-text type="password" v-model="company.password" />
                    <span v-if="!company.password" class="p-error">Password is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="pass">Confirm Password</label>
                    <pv-input-text type="password" v-model="pass" />
                    <span v-if="company.password!==pass" class="p-error">Do not match password</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="license">Company Name</label>
                    <pv-input-text type="text" v-model="company.name" />
                    <span v-if="!company.name" class="p-error">Company name is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="country">RUC</label>
                    <pv-input-text
                        type="text"
                        maxlength="11"
                        v-model="company.ruc"
                    />
                    <span v-if="!company.ruc" class="p-error">RUC is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">Region</label>
                    <pv-input-text type="text" v-model="company.region" />
                    <span v-if="!company.region" class="p-error">Region is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">City</label>
                    <pv-input-text type="text" v-model="company.city" />
                    <span v-if="!company.city" class="p-error">City is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">State</label>
                    <pv-input-text type="text" v-model="company.state" />
                    <span v-if="!company.state" class="p-error">State is required.</span>
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">Address</label>
                    <pv-input-text type="text" v-model="company.address" />
                    <span v-if="!company.address" class="p-error">Address is required.</span>
                </div>

                <pv-button
                    label="Register"
                    class="p-button-rounded w-10rem"
                    @click="SubmitForm()"
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
import { CompaniesServices } from "@/companies/services/companies-api.services.js";
import Dialog  from "@/login/pages/Dialog.vue";
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
      company: {
        ruc: '',
        id: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        name: '',
        region: '',
        city: '',
        state: '',
        address: ''
      },
    })
    const rules = computed(() => {
      return {
        company: {
          ruc: {
            required,
          },
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
          name: {
            required,
          },
          region: {
            required,
          },
          city: {
            required,
          },
          state: {
            required,
          },
          address: {
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
      users: [],
      companies: [],
      account: {
        id: '',
        email: '',
        password: '',
        role: '',
      },
      company: {
        ruc: '',
        id: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        name: '',
        region: '',
        city: '',
        state: '',
        address: ''
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
    this.service = new CompaniesServices();
    this.service.GetUsers().then((res) => {
      this.users = res.data;
    });
    this.service.GetAll().then((res) => {
      this.companies = res.data;
    });
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
      this.$router.push('/login');
    },
    validatePassword() {
      this.showMismatchPassword = false;
    },
    Add() {
      this.company.id = this.users[this.users.length - 1].id + 1;
      this.service.AddCompany(this.company).then((response) => {
        this.companies.push(this.company);
      });
      this.showSuccess = true;
    },
    AddUser() {
      this.account.id = 0;
      this.account.email = this.company.email;
      this.account.password = this.company.password;
      this.account.role = 'company';
      this.service.AddUser(this.account).then((response) => {
        this.users.push(this.account);
      });
    },
    verifyEmail() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === this.company.email) {
          this.registered = true;
          this.showDialog = true;
          break;
        }
        else {
          this.registered = false;
          break;
        }
      }
    },
    SubmitForm() {
      if(this.company.first_name !=='' && this.company.last_name !=='' && this.company.phone !=='' && this.company.email !=='' && this.company.password !=='' && this.company.name !=='' && this.company.region !=='' && this.company.city !=='' && this.company.state !=='' && this.company.address !==''){
        if(this.company.password === this.pass)
        {
          this.verifyEmail();
          if (this.registered === false) {
            this.AddUser();

            this.Add();
          }
        } else{
          this.showMismatchPassword = true;
        }
      }
      else {
       this.showError = true;
      }
    },
  },
};
</script>

<style>
* {
    margin: 0;
}
</style>
