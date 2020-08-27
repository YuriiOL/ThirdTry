<template>
  <div class="sideBar">
    <div class="sideHead">Ваша картина</div>
    <div class="textInfo">
      <p>Изображение: Не выбрано</p>
      <p>Рама: Не выбрано</p>
      <p>Отпечатки: Не выбрано</p>
    </div>
    <div class="chosenElement">
      <img v-if="chosenItems != ''" :src="chosenItems[0].img" alt />
    </div>
    <button @click="$router.push('/borders')" v-if="$router.history.current.name == 'Wrapper'">ДАЛЕЕ</button>
    <button @click="$router.push('/titles')" v-if="$router.history.current.name == 'Borders'">ДАЛЕЕ</button>
    <button @click="$router.push('/colors')" v-if="$router.history.current.name == 'Titles'">ДАЛЕЕ</button>
    <button @click="$router.push('/')" v-if="$router.history.current.name == 'Colors'">ДАЛЕЕ</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["chosenItems"])
  }
};
</script>

<style scoped>
.sideBar {
  border-left: 1px solid gray;
  width: 250px;
  height: 500px;
  position: absolute;
  right: 0px;
  background-color: rgb(226, 223, 223);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.sideHead {
  height: 25px;
  border-bottom: 1px solid gray;
  padding: 11px 30px 0px 20px;
  font-size: 20px;
}
.chosenElement {
  margin: 30px;
  width: 180px;
  height: 250px;
  border: 1px solid gray;
  background-color: white;
}
img {
  margin: 10px;
  width: 160px;
  height: 230px;
}
button {
  border: 1px solid gray;
  position: absolute;
  bottom: 25px;
  left: 32px;
  width: 180px;
  height: 30px;
  background-color: rgb(148, 218, 45);
  color: white;
  border-radius: 20px;
  outline: none !important;
  border: 1px;
  font-family: "Times New Roman";
}
.textInfo {
  margin: 20px 20px;
  margin-bottom: none;
}
</style>