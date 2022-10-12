<template>
    <div class="home">
        <Sidebar />

        <div>
            <router-view></router-view>
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
import Sidebar from "../drivers/components/Sidebar.vue";

export default {
    components: {
        Sidebar,
    },
    data() {
        return {};
    },
    created() {},
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
