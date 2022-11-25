<template>
  <div class="container">
    <pv-card class="main">

      <template #title>Settings</template>
      <template #content style="width: 100vw">
        <div class="grid">

          <img :src=driver.imageUrl alt="Photo" style="display: inline-grid; padding: 0.5rem">

          <div class="field" style="display: inline-grid">
            <label>First Name</label>
            <br/>
            <pv-input-text  type="text" v-model="driver.firstName"/>
          </div>
          <div class="field" style="display: inline-grid">
            <label>Last Name</label>
            <br/>
            <pv-input-text  type="text" v-model="driver.lastName"/>
          </div>
          <div class="field" style="display: inline-grid">
            <label>Email</label>
            <br/>
            <pv-input-text  type="text" v-model="driver.userName"/>
          </div>

          <div class="field" style="display: inline-grid">
            <label>Password</label>
            <br/>
            <pv-input-text  type="password" v-model="driver.password"/>
          </div>

          <div  class="field" style="display: inline-grid">
            <label>Phone</label>
            <br/>
            <pv-input-text  type="text" v-model="driver.phone"/>
          </div>

          <div class="field" style="display: inline-grid">
            <label>Description</label>
            <br/>
            <pv-input-text  type="text" v-model="driver.description"/>
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
import { DriversServices } from "../services/drivers-api.services";
export default {

  components: {
    Sidebar,
  },
  name: "driver-settings.vue",
  data() {
    return {
      driver: {
      "firstName": "",
      "lastName": "",
      "userName": "",
      "password": "",
      "phone": "",
      "role": "",
      "description": "",
      "imageUrl": ""
      }
    };
  },
  created() {
    this.service = new DriversServices();
    this.service.GetUserById(localStorage.getItem("id")).then((response) => {
      this.driver = response.data;
      console.log(this.driver);
    });
  },
  methods: {
    save() {
      this.service.ModifyDriver(this.driver.id, this.driver).then((response) => {
        console.log("Saved!");
      });
    },
    restart() {
      this.service.GetUserById(this.driver.id).then((response) => {
        this.driver = response.data;
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