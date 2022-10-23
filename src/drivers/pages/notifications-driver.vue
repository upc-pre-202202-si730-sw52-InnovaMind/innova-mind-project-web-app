<template>
  <div class="notifications">
    <div>
      <div class="w-full">

        <pv-card
            style="width: 120%; margin-bottom: 1em; margin-top: 2em"
            class="notification" v-for="(notification, i) in notifications"
            :key="i"
        >
          <template #header>
            <img alt="user header"  :src="notification.photo" class="avatar-header-image">
          </template>
          <template #title> {{ notification.contact }} </template>
          <template #content>
            <p class="text-black">{{notification.message}}</p> <h5>{{notification.date}}</h5>
          </template>
          <template #footer>
            <pv-button icon="pi pi-check" label="View" class="p-button-primary" />
            <pv-button icon="pi pi-times" label="Delete" class="p-button-secondary" style="margin-left: 0.2em"/>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>



<script lang="js">
import Sidebar from "../components/Sidebar.vue";
import {DriversServices} from "@/drivers/services/drivers-api.services";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      notifications: [],
    };
  },
  created() {
    this.service = new DriversServices();
    this.service.GetNotifications().then((response) => {
      this.notifications = response.data;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
p {
  line-height: 1.5;
  margin: 0;
}
h5 {
  margin: 0;
}

.notifications {
  width: calc(100vw - 800px);
  min-width: 365px;
  max-width: 500px;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  text-align: center;
  overflow: auto;

}
.avatar-header-image {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  margin: auto;

}
::-webkit-scrollbar {
  display: none;
}
.p-button-primary{
  width: 100px;
  margin: 2px;
}
.p-button-secondary{
  width: 100px;
  margin: 2px;
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
