<template>
  <div class="pictures">
    <h3>Цвет отпечатков</h3>
    <p>
      наконец, подберите самые подходящие цвета красок, с помощью которых вы и
      <br />оставите на картине свой след на память!
    </p>
    <div class="container">
      <img v-for="i in colors" :key="i.id" :src="i.img" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["colors"])
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

img {
  height: 138px;
  width: 118px;
  border: 1px solid gray;
  float: left;
  margin: 5px;
  border-radius: 10px;
}
</style>