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
                </div>

                <div class="field col-12 md:col-4">
                    <label for="last">Last Name</label>
                    <pv-input-text type="text" v-model="company.last_name" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="phone">Phone</label>
                    <pv-input-text type="tel" v-model="company.phone" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="email">Email</label>
                    <pv-input-text type="email" v-model="company.email" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="password">Password</label>
                    <pv-input-text type="password" v-model="company.password" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="pass">Confirm Password</label>
                    <pv-input-text type="password" v-model="pass" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="license">Company Name</label>
                    <pv-input-text type="text" v-model="company.name" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="country">RUC</label>
                    <pv-input-text
                        type="text"
                        maxlength="11"
                        v-model="company.ruc"
                    />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">Region</label>
                    <pv-input-text type="text" v-model="company.region" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">City</label>
                    <pv-input-text type="text" v-model="company.city" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">State</label>
                    <pv-input-text type="text" v-model="company.state" />
                </div>

                <div class="field col-12 md:col-4">
                    <label for="region">Address</label>
                    <pv-input-text type="text" v-model="company.address" />
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
  </div>
</template>

<script>
import { CompaniesServices } from "@/companies/services/companies-api.services.js";
import Dialog  from "@/login/pages/Dialog.vue";

export default {
  props: ['show', 'description', 'title', 'close'],
  components: {
    Dialog
  },
    data() {
        return {
          users: [],
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
        };
    },
    created() {
        this.service = new CompaniesServices();
        this.service.GetUsers().then((res) => {
          this.users = res.data;
        });
    },
    methods: {
      cancel() {
        this.showDialog = false;
      },
      Add() {
        this.company.id = this.account.id;
        this.service.Add(this.company).then((response) => {
          this.company.push(this.company);
        });
        this.$router.push('/home-company/'+this.company.id);
      },
      AddUser() {
        this.account.id = 0;
        this.account.email = this.company.email;
        this.account.password = this.company.password;
        this.account.role = 'company';
        this.service.AddUser(this.account).then((response) => {
          this.account.push(this.account);
        });
      },
      verifyEmail() {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].email === this.company.email) {
            this.registered = true;
            this.showDialog = true;
            break;
          }
        }
      },
      SubmitForm() {
        this.verifyEmail();
        if(!this.registered){
          this.AddUser();
          this.Add();
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
