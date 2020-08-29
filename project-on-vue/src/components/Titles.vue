<template>
  <div class="titles">
    <h3>Заголовок</h3>
    <p>
      персонализируйте ваше "Дерево пожеланий", вверху и в низу картины есть спецыальне поля которые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или особые пожелания, добавить дату, или логотип компании, если речь
      <br />идьот о корпоративном порядке.
    </p>
    <input type="text" placeholder="Наша свадьба" v-model="titles.title1" />Заголовок картины
    <br />
    <input type="text" placeholder="Анастасия и Констатин" v-model="titles.title2" />Подпись
    <br />
    <input type="text" placeholder="29 июля 2015" v-model="titles.title3" />Дата события
    <br />
    <button @click="addFontAriston">Ariston</button>
    <button @click="addFontDavinci">DaVinci</button>
    <button @click="addFontBrody">Brody</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["titles", "font"])
  },
  methods: {
    ...mapMutations(["addFontAriston", "addFontDavinci", "addFontBrody"])
  }
};
</script>

<style scoped>
.titles {
  position: absolute;
  width: 550px;
  height: 410px;
  top: 35px;
  font-size: 14px;
  padding-left: 20px;
}
p {
  margin-bottom: 30px;
}
input {
  margin: 5px;
  border-radius: 15px;
  height: 35px;
  width: 170px;
  border: 1px solid gainsboro;
  padding-left: 20px;
  outline: none;
}
button {
  width: 90px;
  height: 35px;
  color: rgb(124, 187, 30);
  background-color: white;
  border: 1px solid rgb(125, 189, 31);
  border-radius: 20px;
  outline: none !important;
  font-family: "Times New Roman";
  font-size: 19px;
  opacity: 0.6;
  margin: 25px 5px;
}
</style>