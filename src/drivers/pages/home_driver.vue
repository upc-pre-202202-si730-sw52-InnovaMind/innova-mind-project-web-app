<template>
    <div class="w-full">
        <pv-card
            style="width: 25rem; margin-bottom: 2em; margin-top: 2em"
            class="Welcome"
        >
            <template #title> Welcome back! </template>
            <template #content>
                <p class="text-white">
                    We hope you have a great day today. These are your news
                </p>
            </template>
        </pv-card>

        <pv-card
            style="width: 25em; margin-top: 2em"
            v-for="(New, i) in news"
            :key="i"
        >
            <template #header>
                <img :src="New.photo" style="height: 15rem" />
            </template>
            <template #title> {{ New.title }} </template>
            <template #subtitle> {{ New.author }} </template>
            <template #content>
                <p>
                    {{ New.description }}
                </p>
            </template>
            <template #footer>
                <pv-button icon="pi pi-check" label="Save" />
                <pv-button
                    icon="pi pi-times"
                    label="Cancel"
                    class="p-button-secondary"
                    style="margin-left: 0.5em"
                />
            </template>
        </pv-card>
    </div>
</template>

<script lang="ts">
import { DriversServices } from "../services/drivers-api.services";

export default {
    data() {
        return {
            news: [
              { "photo": ""},
              { "title": ""},
              { "author": ""}
            ],
            Perfil:{},
            user_id:"",
            
        };
    },
    created() {
        try {
            this.service = new DriversServices();
            this.user_id=localStorage.getItem('id');
            this.service.Getdriver(this.user_id).then((response) => {
              this.Perfil = response.data;
              console.log(response.data);
            });
            
        
        this.service.GetDriversNews().then((response) => {
            this.news = response.data;
            console.log(response.data);
        });
            
        } catch (error) {
            
        }
    },
    methods: {},
};
</script>

<style scoped>
.Welcome {
    background-image: url("https://media.istockphoto.com/vectors/tropical-beach-with-palm-trees-and-sea-summer-resort-at-sunset-vector-id880207968?k=20&m=880207968&s=612x612&w=0&h=fQbBXdJT7PDRCvvWJrXlpHLPofd_W8z-0dNhR8L_ndo=");
}
</style>
