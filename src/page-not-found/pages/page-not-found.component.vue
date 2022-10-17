<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="block text-6xl font-bold mb-1">Page Not Found</span>
        <div class="text-6xl text-primary font-bold mb-3">Error 404</div>
        <p class="mt-0 mb-4 text-700 line-height-3">You have to options, in the button about us you will see a landing page with our information. In the button go back you will return in the section login</p>

        <pv-button label="Go Back" type="button" icon="pi pi-arrow-left" class="mr-3 p-button-raised" @click="goBack"></pv-button>
        <pv-button label="About US" type="button" class="p-button-outlined" @click="landingPage"></pv-button>
      </section>
    </div>
    <div class="container col-12 md:col-6 overflow-hidden">
      <img src="../../assets/images/error404.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
  </div>
</template>

<script>

export default {
  name: "PageNotFound",
  methods: {
    landingPage() {
      window.location.href = `https://upc-pre-202202-si730-sw52-innovamind.github.io/`;
    },
    goBack() {
      window.location.href = `/`;
    }
  },
}
</script>

<style scoped>
@media (max-width: 850px) {
  .container{
    display: flex;
    justify-content: center;
  }

}
</style>