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
            v-for="(user, i) in users"
            :key="i"
        >
            <template #header>
                <img :src="user.imageUrl" style="height: 15rem" />
            </template>
            <template #title> {{ user.firstName + " "+ user.lastName }} </template>
            <template #subtitle> {{ user.role }} </template>
            <template #content>
                <p>
                    {{ user.description }}
                </p>
            </template>
            <template #footer>
                <pv-button icon="pi pi-eye" label="View Profile" />
                <pv-button
                    icon="pi pi-bell"
                    label="Notify"
                    class="p-button-secondary"
                    style="margin-left: 0.5em"
                />
            </template>
        </pv-card>
    </div>
</template>

<script lang="js">
import { CompaniesServices } from "../services/companies-api.services";

export default {
    data() {
        return {
            users: [],
            service: null,
        };
    },
    async created() {
        this.service = new CompaniesServices();
        await this.service.GetAllUsers().then((response) => {
          if(response.status == 200){

            this.users = response.data.filter( x => x.role === "driver")
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
