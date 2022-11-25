<template>
    <div class="home">
        <Sidebar />

        <div>
            <router-view></router-view>
        </div>

        <div class="left-bar">
            <div class="profile-bar">
                <h5>{{user.firstName + " "+ user.lastName }}</h5>
                <div class="profile-image">
                    <img
                        :src="user.imageUrl"
                        alt="Recruiter's profile photo"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import "primeicons/primeicons.css";
import Sidebar from "../companies/components/Sidebar.vue";
import { CompaniesServices} from "@/companies/services/companies-api.services";

export default {
    components: {
        Sidebar,
        CompaniesServices
    },
    data() {
        return {
          service: null,
          user: {},
        };
    },
    created() {
      this.service = new CompaniesServices();
      this.service.GetUserById(localStorage.getItem('id')).then((response) => {
        this.user = response.data;
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
</style>
