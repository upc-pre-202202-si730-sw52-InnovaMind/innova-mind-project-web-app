<template>
    <div class="flex flex-column bg-cyan-500 h-screen row-gap-5 ">
        <div class="align-self-center flex column-gap-2 mt-5">
            <h2 class="align-self-center">Select your type of user</h2>
            <pv-dropdown v-model="user.type" :options="users" placeholder="Select"/>
        </div>

        <div v-show="user.type === 'driver'">
            <RegisterDriver/>
        </div>
    </div>
</template>

<script>
import RegisterDriver from "@/register/register-drivers.component.vue";
export default {
    components: {
        RegisterDriver
    },
    data() {
        return {
            user: {},
            users: ["company", "driver"],
        };
    },
    methods: {
        Test() {
            console.log(this.user.type);
        },
    },
};
</script>

<style></style>
