<template>
  <div class="container">
    <Sidebar/>
    <pv-card class="main">

      <template #title>Settings</template>
      <template #content style="width: 100vw">
        <div class="grid">

          <img src="https://i.pinimg.com/736x/94/bd/98/94bd986bd47b84a0c4071e1aff4dd23f.jpg" alt="Photo" style="display: inline-grid; padding: 0.5rem">

          <div class="field" style="display: inline-grid">
            <label>Full Name</label>
            <br/>
            <pv-input-text  type="text" v-model="recruiter.first_name"/>
          </div>
          <div class="field" style="display: inline-grid">
            <label>RUC</label>
            <br/>
            <pv-input-text  type="text" v-model="recruiter.ruc"/>
          </div>
          <div class="field" style="display: inline-grid">
            <label>Email</label>
            <br/>
            <pv-input-text  type="text" v-model="recruiter.email"/>
          </div>

          <div class="field" style="display: inline-grid">
            <label>Password</label>
            <br/>
            <pv-input-text  type="password" v-model="recruiter.password"/>
          </div>

          <div  class="field" style="display: inline-grid">
            <label>Phone</label>
            <br/>
            <pv-input-text  type="text" v-model="recruiter.phone"/>
          </div>

          <div class="field" style="display: inline-grid">
            <label>Location</label>
            <br/>
            <pv-input-text  type="text" v-model="recruiter.city"/>
          </div>
        </div>
      </template>
      <template #footer>
        <pv-button icon="pi pi-times" label="Cancel" v-on:click="restart()"  class="p-button-secondary"></pv-button>
        <pv-button icon="pi pi-check" label="Save" v-on:click="save()" style="margin-left: .5em"></pv-button>
      </template>
    </pv-card>
  </div>
</template>

<script lang="js">
import "primeicons/primeicons.css";
import Sidebar from "../components/Sidebar.vue";
import { CompaniesServices } from "@/companies/services/companies-api.services";

export default {
  components: {
    Sidebar,
  },
  name: "company_settings",
  data() {
    return {
      recruiter: {},
    };
  },
  created() {
    this.service = new CompaniesServices();
    this.service.GetCompanyById(localStorage.getItem("id")).then((response) => {
      this.recruiter= response.data;
      console.log(response.data);
    });
  },
  methods: {
    save() {
      this.service.ModifyCompany(this.recruiter.id, this.recruiter).then((response) => {
        console.log("Saved!");
      });
    },
    restart() {
      this.service.GetCompanyById(this.recruiter.id).then((response) => {
        this.recruiter= response.data;
        console.log("Restarting!");
      });
    },
  },
}
</script>

<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  justify-items: start;
}
.main {
  width: calc(100vw - 300px);
  height: calc(100vh - 50px);
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.field {
  max-width: 60%;
  margin: 0.5rem;
  padding: 0.5rem;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  grid-column: 1/3;
}
@media (max-width: 990px) {
  .main {
    height: auto;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  img {
    grid-column: 1/2;
  }
}
</style>