<template>
  <div class="apply-for-job">
    <Sidebar />

    <div class="main-forms">

      <pv-dropdown v-model="selectedCompany" :options="companies"
                   optionLabel="name" placeholder="Company for Apply" class="field" id="first-field"/>
      <pv-dropdown v-model="selectedSalary" :options="salaries"
                   optionLabel="name" placeholder="Salary" class="field"/>
      <pv-dropdown v-model="selectedExperience" :options="experiences"
                   optionLabel="name" placeholder="Experience for Job" class="field"/>
      <pv-dropdown v-model="selectedRegion" :options="regions"
                   optionLabel="name" placeholder="Region" class="field"/>
      <pv-dropdown v-model="selectedLicense" :options="licenses"
                   optionLabel="name" placeholder="License category" class="field"/>
      <pv-button id="submit" v-on:click="getCompanies"   label="Apply"/>
      <pv-card v-for="(company, i) in companies" :key="i" :company="company" class="card">
        <template #header>
          <h1>{{company.first_name}}</h1>
        </template>
        <template #content>
          <p>{{company.first_name}}</p>
        </template>
      </pv-card>

    </div>
    <div class="left-bar">
      <div class="results">
        <h3>Results</h3>
        <div class="profile-image">
          <img
            src="https://i.pinimg.com/736x/94/bd/98/94bd986bd47b84a0c4071e1aff4dd23f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "primeicons/primeicons.css";
import Sidebar from "../components/Sidebar.vue";
import { CompaniesServices  } from "/src/companies/services/companies-api.services";

export default {
  name: "apply_for_job",
  components: {
    Sidebar,
  },
  data() {
    return {
      selectedCompany: null,
      companies: [
        {name: 'Uber', code: 'UB'},
        {name: 'Lyft', code: 'LY'},
        {name: 'Postmates', code: 'PM'},
        {name: 'DoorDash', code: 'DD'}
      ],
      selectedSalary: null,
      salaries: [
        {name: 'Less than $1500', code: 'L15'},
        {name: '$1500 - $2000', code: '1520'},
        {name: '$2000 - $2500', code: '2025'},
        {name: '$2500 - $3000', code: '2530'},
        {name: '$3000 - $3500', code: '3035'},
        {name: '$3500 - $4000', code: '3540'},
        {name: 'More than $4000', code: 'M40'},
      ],
      selectedExperience: null,
      experiences: [
        {name: '1 year', code: '1'},
        {name: '2 years', code: '2'},
        {name: '3 years', code: '3'},
        {name: '4 years', code: '4'},
        {name: '5 years', code: '5'},
        {name: '6 years', code: '6'},
        {name: '7 years', code: '7'},
        {name: '8 years', code: '8'},
        {name: '9 years', code: '9'},
        {name: '10 years', code: '10'}
      ],
      selectedRegion: null,
      regions: [
        {name: 'Amazonas', code: 'AM'},
        {name: 'Ancash', code: 'AN'},
        {name: 'Apurímac', code: 'AP'},
        {name: 'Arequipa', code: 'AQ'},
        {name: 'Ayacucho', code: 'AY'},
        {name: 'Cajamarca', code: 'CJ'},
        {name: 'Callao', code: 'CL'},
        {name: 'Cusco', code: 'CU'},
        {name: 'Huancavelica', code: 'HV'},
        {name: 'Huánuco', code: 'HO'},
        {name: 'Ica', code: 'IC'},
        {name: 'Junín', code: 'JU'},
        {name: 'La Libertad', code: 'LL'},
        {name: 'Lambayeque', code: 'LB'},
        {name: 'Lima', code: 'LI'},
        {name: 'Loreto', code: 'LO'},
        {name: 'Madre de Dios', code: 'MD'},
        {name: 'Moquegua', code: 'MO'},
        {name: 'Pasco', code: 'PA'},
        {name: 'Piura', code: 'PI'},
        {name: 'Puno', code: 'PU'},
        {name: 'San Martín', code: 'SM'},
        {name: 'Tacna', code: 'TA'},
        {name: 'Tumbes', code: 'TU'},
        {name: 'Ucayali', code: 'UC'}
      ],
      selectedLicense: null,
      licenses: [
        {name: 'A-I', code: 'a1'},
        {name: 'A-IIa', code: 'a2a'},
        {name: 'A-IIb', code: 'a2b'},
        {name: 'A-IIIa', code: 'a3a'},
        {name: 'A-IIIb', code: 'a3b'},
        {name: 'A-IIIc', code: 'a3c'}
      ],
    }
  },
  service: {
    companies: CompaniesServices
  },
  companies: [],

  created() {
    this.service = new CompaniesServices();
  },
  methods: {
    getCompanies() {
      this.service.GetAll().then((response) => {
        this.companies = response.data;
        console.log(response.data);
      });
    }
  },
}
</script>

<style scoped>
.apply-for-job {
  display: flex;
  flex: 100%;
  flex-direction: row;
  background-color: #f5f5f5;
}
.left-bar {
  display: flex;
  flex-direction: column;
  align-self: flex-end;

}
.profile-image img{
  width: 60px;
}
.main-forms {
  display: flex;
  flex-direction: column;
}
.field {
  width: 15rem;
  margin-left: 4rem;
  margin-top: 1rem;
  align-content: center;
  background: #CBE0FF;
  border-radius: 12px;
  color: black;
  border-style: none;

}
#first-field {
  margin-top: 6rem;
}
#submit {
  margin-left: 9rem;
  margin-top: 3rem;
  background: #007BBB;
  border-radius: 8px;
  color: black;
  border-style: none;
  width: 12rem;
}
</style>