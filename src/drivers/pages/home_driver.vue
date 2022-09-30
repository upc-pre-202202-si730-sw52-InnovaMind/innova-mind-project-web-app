<template>
    <div class="home">
        <Sidebar />

        <div>
            <div class="w-full">
                <pv-card
                    style="width: 25rem; margin-bottom: 2em; margin-top: 2em"
                    class="Welcome"
                >
                    <template #title> Welcome back! </template>
                    <template #content>
                        <p class="text-white">
                            We hope you have a great day today. These are your
                            news
                        </p>
                    </template>
                </pv-card>

                <pv-card style="width: 25em; margin-top: 2em" v-for="(New, i) in news" :key="i">
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
        </div>

        <div class="left-bar">
            <div class="profile-bar">
                <h5>Guillermo Diaz</h5>
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
import { DriversServices } from "../services/drivers-api.services";

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            news: [],
        };
    },
    created() {
        this.service = new DriversServices();
        this.service.GetDriversNews().then((response) => {
            this.news = response.data;
            console.log(response.data);
        });
    },
    methods: {},
};
</script>

<style scoped>
.home {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
}
.left-bar {
    width: 20rem;
    height: 100%;
    background-color: #fff;
    display: flex;
    border-right: 1px solid #e6e6e6;
    color: black;
    flex-direction: column;
}

.profile-bar {
    display: flex;
    height: 6rem;
    align-items: center;
    justify-content: flex-end;
}
.profile-bar h5 {
    font-size: 1.3vw;
}

.profile-image {
    width: 60px;
    height: 60px;
    min-height: 60px;
    min-width: 60px;
    margin: 0 20px;
}
.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.Welcome {
    background-image: url("https://media.istockphoto.com/vectors/tropical-beach-with-palm-trees-and-sea-summer-resort-at-sunset-vector-id880207968?k=20&m=880207968&s=612x612&w=0&h=fQbBXdJT7PDRCvvWJrXlpHLPofd_W8z-0dNhR8L_ndo=");
}
</style>
