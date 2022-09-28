<template>
    <div class="flex align-items-center justify-content-center w-full h-screen bg-cyan-500">
        <form class="w-8 register-drivers ">
            <div class="mb-4 field col-12">
                <h1>Get Started With InnovaMind</h1>
                <h5 class="text-50">Please, tell us about you</h5>
            </div>
        <div class="flex justify-content-center p-fluid formgrid grid">            
            <div class="field col-12 md:col-4">
                <label for="first_name">First Name</label>
                <pv-input-text type="text" v-model="driver.first_name" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="last">Last Name</label>
                <pv-input-text type="text" v-model="driver.last_name" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="phone">Phone</label>
                <pv-input-text type="tel" v-model="driver.phone" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="email">Email</label>
                <pv-input-text type="email" v-model="driver.email" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="password">Password</label>
                <pv-input-text type="password" v-model="driver.password" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="pass">Confirm Password</label>
                <pv-input-text type="password" v-model="pass" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="license">Type of license</label>
                <pv-dropdown v-model="driver.license" :options="licenseList" placeholder="Select a License"/>
            </div>

            <div class="field col-12 md:col-4">
                <label for="country">Country</label>
                <pv-input-text type="text" v-model="driver.country" />
            </div>

            <div class="field col-12 md:col-4">
                <label for="region">Region</label>
                <pv-input-text type="text" v-model="driver.region" />
            </div>

            <pv-button label="Register" class="p-button-rounded w-10rem" @click="Add()" />
        </div>
        
        </form>
    </div>
</template>

<script>
import { DriversServices } from "../drivers/services/drivers-api.services";

export default {
    data() {
        return {
            licenseList: [
                "A-I",
                "A-IIa",
                "A-IIb",
                "A-IIIa",
                "A-IIIb",
                "A-IIIc",
            ],
            drivers: [],
            driver: {},
            pass: "",
        };
    },
    created() {
        this.service = new DriversServices();
    },
    methods: {
        Add() {
            this.driver.id = 0;
            this.service.Add(this.driver).then((response) => {
                this.drivers.push(this.driver);
            });
        },
        Test() {
            console.log(typeof(this.driver.license));
        },
    },
};
</script>

<style>
    *{
        margin: 0;
    }
</style>