<template>
    <i class="pi pi-chevron-right" v-if="mobileView" v-on:click="()=>{showed=true}"></i>
    <div class="sidebar" v-if=" !mobileView">
        <div class="logo">
            <img
                class="logo-image"
                src="https://raw.githubusercontent.com/upc-pre-202202-si730-sw52-InnovaMind/innova-mind-project-web-app/main/src/assets/images/logoZenDriver.png"
                alt="ZenDriver's logo"
            />
            <p style class="logo-text">ZenDriver</p>
        </div>
        <ul>
            <li>
                <router-link to="/driver/home" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-home"></i>
                        <p>Home</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/driver/apply" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-search"></i>
                        <p>Apply for job</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/driver/messages" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-comments"></i>
                        <p>Messages</p>
                    </div>
                </router-link>
                
            </li>
            <li>                
                <router-link to="/driver/notifications" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-bell"></i>
                        <p>Notifications</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/driver/profile" style="text-decoration: none;">
                    <div>
                    <i class="pi pi-user"></i>
                    <p>Profile</p>
                    </div>
                </router-link>
                
            </li>
            <li>
                <router-link to="/driver/settings" style="text-decoration: none;">
                    <div>
                    <i class="pi pi-sliders-h"></i>
                    <p>Settings</p>
                </div>
                </router-link>   
            </li>
            <li>
                <div @click="logout()">
                    <i class="pi pi-sign-out"></i>
                    <p>Logout</p>
                </div>
            </li>
        </ul>
    </div>

    <div class="sidebar-movile" v-if=" mobileView && showed">
        <i class="pi pi-chevron-left" v-on:click="()=>{showed=false}"></i>
        <div class="logo">
            
            <img
                class="logo-image"
                src="https://raw.githubusercontent.com/upc-pre-202202-si730-sw52-InnovaMind/innova-mind-project-web-app/main/src/assets/images/logoZenDriver.png"
                alt="ZenDriver's logo"
            />
            <p class="logo-text">ZenDriver</p>
        </div>
        <ul>
            <li>
                <router-link to="/driver/home" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-home"></i>
                        <p>Home</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/driver/apply" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-search"></i>
                        <p>Apply for job</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/driver/messages" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-comments"></i>
                        <p>Messages</p>
                    </div>
                </router-link>
                
            </li>
            <li>                
                <router-link to="/driver/notifications" style="text-decoration: none;">
                    <div>
                        <i class="pi pi-bell"></i>
                        <p>Notifications</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/driver/profile" style="text-decoration: none;">
                    <div>
                    <i class="pi pi-user"></i>
                    <p>Profile</p>
                    </div>
                </router-link>
                
            </li>
            <li>
                <router-link to="/driver/settings" style="text-decoration: none;">
                    <div>
                    <i class="pi pi-sliders-h"></i>
                    <p>Settings</p>
                </div>
                </router-link>   
            </li>
            <li>
                <div @click="logout()">
                    <i class="pi pi-sign-out"></i>
                    <p>Logout</p>
                </div>
            </li>
        </ul>
    </div>
    
</template>
<script lang="js">
import "primeicons/primeicons.css";

export default {
    name: "Sidebar",
    data() {
        return {
            display: 'flex',
            mobileView: true,
            showed: false,
        };
    },
    methods: {
        handleView(){
            this.mobileView = window.innerWidth <= 768;
        },
        logout(){
            localStorage.clear();
            this.$router.push('/login');
        },
    },
    created() {
        this.handleView();
        
    },
    mounted() {
        window.addEventListener('resize', this.handleView);
    },
    
  
};
</script>
<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #e6e6e6;
    color: black;
}
.sidebar-movile{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;

}

.expander{
    display: none;
}

.logo {
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
    align-items: center;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
}

.logo-image {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    margin-left: 1rem;
}

ul {
    list-style: none;
    padding: 0px 12px;
}
li div {
    display: flex;
    align-items: center;
    margin: 0px 0;
    padding: 6px 20px;
    font-size: 1rem;
    border-radius: 5px;
}
li div:hover {
    background-color: #a0bfd1;
    cursor: pointer;
}
li div p {
    margin-left: 20px;
}

li div i {
    font-size: 1.4rem;
}
router-link{
    text-decoration: none;
}
i {
    color:black;
}
p{ 
    color: black;
}



</style>