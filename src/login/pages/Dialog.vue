<template>
  <div v-show="show" class="overlay">
    <div class="dialog">
      <div class="dialog-content">
        <h2 class="dialog-title" v-text="title"></h2>
        <p class="dialog-description" v-text="description"></p>
      </div>
      <hr />
      <div class="dialog-footer">
        <pv-button @click="cancel" class="dialog__cancel">Accept</pv-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ['show', 'title', 'description', 'cancel'],
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 37.5%;
  left: 40%;
  width: 20%;
  height: 25%;
  background-color: #B00020;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 999;
}
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
}
p {
  color: #FFFFFF;
}
button {
  background: #718690;
  color: black;;
}
@media (max-width: 1000px) {
  .overlay {
    width: 30%;
    height: 30%;
    top: 35%;
    left: 35%;
  }
}
@media (max-width: 400px) {
  .overlay {
    width: 50%;
    height: 30%;
    top: 35%;
    left: 25%;
  }
}
</style>