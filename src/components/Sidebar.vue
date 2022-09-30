<template>
    <div class="sidebar">
            <div class="logo">
                <img class="logo-image" src="./../assets/images/logoZenDriver.png" alt="logo" />
                <p class="logo-text">ZenDriver</p>
            </div>
            <ul>
                <li>
                    <div>
                        <i class="pi pi-home"></i>
                        <p>Home</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="pi pi-comments"></i>
                        <p>Messages</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="pi pi-bell"></i>
                        <p>Notifications</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="pi pi-user"></i>
                        <p>Profile</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="pi pi-sliders-h"></i>
                        <p>Settings</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="pi pi-sign-out"></i>
                        <p>Logout</p>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script lang="ts">
    import "primeicons/primeicons.css";

    export default {
        name: "Sidebar",
    }
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

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 0px;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
}

.logo-image {
    width: 50px;
    height: 50px;
}

ul {
    list-style: none;
    padding: 0px 12px;
}
li div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px 0;
    padding: 6px 20px;
    font-size: 1.0rem;
    border-radius: 5px;
}
li div:hover{
    background-color: #a0bfd1;
    cursor: pointer;
}
li div p{
    margin-left: 20px;
}

li div i{
    font-size: 1.4rem;
}
</style>