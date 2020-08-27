<template>
  <div class="pictures">
    <h3>Выберите изображение</h3>
    <p>
      для начала выберите основу, саму картину, на которую вы и гости вашего праздника
      <br />будете наносить отпечатки пальцев с пожеланиями
    </p>
    <div class="container">
      <img v-for="i in pics" :key="i.id" :src="i.img" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["pics"])
  }
};
</script>

<style scoped>
.pictures {
  position: absolute;
  width: 550px;
  height: 410px;
  top: 35px;
  font-size: 14px;
  padding-left: 20px;
}
.container {
  position: absolute;
  bottom: 8px;
  left: 23px;
  border: 1px solid gray;
  height: 300px;
  width: 500px;
  overflow-y: scroll;
  padding-left: 10px;
}

img {
  height: 190px;
  width: 145px;
  border: 1px solid gray;
  float: left;
  margin: 5px;
  border-radius: 10px;
}
</style>