
<template>
    <div class="home">        
        <div>
            <div class="w-full">
                
                
            </div>
        </div>
        <div class="left-bar">
            <div class="left-profile-bar">
                <div class="profile-image-center">
                    <img
                        :src="user.imageUrl"
                        alt=""
                    />
                </div>

            </div>
            <div class="name">
                <h3> {{user.firstName + " "+ user.lastName }}</h3>
            </div>
            <div class="Description">
                <h5>Experience as a truck driver in driving with a semi-trailer, trailer and coupled with the guarantee of safety and the driving experience that this entails.</h5>
                
            </div>
            <div class="line"></div>
            <div class="Contact">
                <h5><i class="pi pi-envelope"></i>{{user.userName}} </h5>
                <h5><i class="pi pi-phone"></i> {{user.phone}}</h5>
                
            </div>
            <div class="line"></div>
            <div class="networks">
                <h5><i class="pi pi-facebook"></i> {{user.userName}}</h5>
                <h5><i class="pi pi-instagram"></i> {{user.userName}}</h5>
                <h5><i class="pi pi-twitter"></i> {{user.userName}}</h5>
                
            </div>
            <div class="line"></div>

        </div>

        <div class="center-bar">
            <div class="profile-bar">
                <div class="profile-image2">
                    <img alt="user header"                         :src="user.imageUrl"
>
                </div>
                <!-- <Card style="width: 100%; margin-top: 2em" v-for="(New, i) in news" :key="i">
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
                    
                </Card> -->
            

            </div>
            <!-- <h2>These are your lastest publications</h2> -->
        </div>
        <div class="right-bar">
            <div class="profile-bar2">
                <h5>{{user.firstName}}</h5>
                <div class="profile-image">
                    <img
                    :src="user.imageUrl"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import "primeicons/primeicons.css";
import Button from 'primevue/button';
import Sidebar from "@/drivers/components/Sidebar.vue";
import Card from 'primevue/card';
import {CompaniesServices} from '../services/companies-api.services.js';
// import { DriversServices } from "../services/driver-api.services";

export default {
  components: {
        Sidebar,
        Button,
        Card,
    },
    data(){
        return {
            name: "String",
            Perfil: {},
            service: null,
            news: [],
            jobs: [],
            user_id: "",

        };
    },
    created() {
        this.user_id=localStorage.getItem('id');
    this.service = new CompaniesServices();
    // console.log(user_id);
    // this.service.Getcompanie(this.user_id).then((response) => {
    //   this.Perfil = response.data;
    //   console.log(response.data);
    // });
    // this.service.GetCompaniesNews().then((response) => {
    //         this.news = response.data;
    //         console.log(response.data);
    //     });
        this.service.GetUserById(localStorage.getItem('id')).then((response) => {
        this.user = response.data;
        console.log(this.user);
      });
        // this.service.GetJobsDriver(1).then((response) => {
        //     this.jobs = response.data;
        //     console.log(response.data);
        // });
  },
  methods: {},

}
// export default {
//     components: {
//         // Sidebar,
//     },
//     data() {
//         return {
//             driver: [],
//         };
//     },
//     created() {
//         this.service = new DriversServices();
//         this.service.Getdriver(1).then((response) => {
//             this.driver = response.data;
//             console.log(response.data);
//         });
//     },
//     methods: {},
// };
</script>

<style scoped>
.home {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
}
.right-bar {
    width: 20rem;
    height: 100%;
    background-color: #fff;
    display: flex;
    border-right: 1px solid #e6e6e6;
    color: black;
    flex-direction: column;
}
.center-bar {
    width: 32rem;
    height: 100%;
    background-color: #fff;
    display: flex;
    border-right: 1px solid #e6e6e6;
    color: black;
    flex-direction: column;
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
    flex-direction: column;
}
.profile-bar2 {
    display: flex;
    height: 6rem;
    flex-direction: row;
}
.left-profile-bar {
    display: flex;
    height: 10rem;
    align-items: center;
    justify-content: center;
}
.profile-image-center{
    width: 100px;
    height: 100px;
    min-height: 60px;
    min-width: 60px;
    margin: 0 20px;
}
.profile-image-center img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

.profile-image2 img{
    width: 100%;
    height: 100%;
}
.profile-image2 img{
    width: 100%;
    border: 2rem solid #fff;
}
.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.Welcome {
    background-image: url("https://media.istockphoto.com/vectors/tropical-beach-with-palm-trees-and-sea-summer-resort-at-sunset-vector-id880207968?k=20&m=880207968&s=612x612&w=0&h=fQbBXdJT7PDRCvvWJrXlpHLPofd_W8z-0dNhR8L_ndo=");
}
.ProfileInform{
    flex: display;
}
.w-full{
    display:flex;
}
</style>
