<template>
    <div class="w-full">
        <pv-card style="width: 25rem; margin-bottom: 2em; margin-top: 2em" class="Welcome">
            <template #title> Welcome back! </template>
            <template #content>
                <p class="text-white">
                    We hope you have a great day today. These are your news
                </p>
            </template>
        </pv-card>

        <pv-card style="width: 25em; margin-top: 2em" v-for="(New, i) in news" :key="i">
            <template #header>
                <img :src="New.imagenURL" style="height: 15rem"/>
            </template>
            <template #title> {{ New.title }} </template>
            <template #subtitle> I am a recruiter from one {{ New.date + " "+ New.location}} </template>
            <template #content>
                <p>
                    {{ New.description }}
                </p>
            </template>
          <template #footer>
            <pv-button icon="pi pi-eye" label="View Profile" />
            <pv-button
                icon="pi pi-bell"
                label="Notify"
                class="p-button-secondary"
                style="margin-left:0.5em"
            />
          </template>
        </pv-card>
    </div>
</template>

<script lang="js">
import { DriversServices } from "../services/drivers-api.services";


export default {

  components: {

  },
    data() {
      return {
          news: [],
          service: null,
        };
    },
    async created() {

      this.service = new DriversServices();
      await this.service.GetDriversNews().then((response) => {
        if(response.status == 200){
          this.news = response.data;
        }
      });


    },
    methods: {},
};
</script>

<style scoped>
.Welcome {
    background-image: url("https://media.istockphoto.com/vectors/tropical-beach-with-palm-trees-and-sea-summer-resort-at-sunset-vector-id880207968?k=20&m=880207968&s=612x612&w=0&h=fQbBXdJT7PDRCvvWJrXlpHLPofd_W8z-0dNhR8L_ndo=");
}
</style>
