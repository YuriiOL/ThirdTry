<template>
  <div class="borders">
    <h3>Рама</h3>
    <p>
      Подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не
      <br />просто оставляете "пальчики", а создаете предмет декора для дома и офиса:
    </p>
    <div class="container">
      <img v-for="i in borders" :key="i.id" :src="i.img" @click="addborder(i)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["borders"])
  },
  methods: {
    ...mapMutations(["addborder"])
  }
};
</script>

<style scoped>
.borders {
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