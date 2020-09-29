<template>
  <div class="titles">
    <h3>Заголовок</h3>
    <p>
      персонализируйте ваше "Дерево пожеланий", вверху и в низу картины есть
      <br />спецыальне поля которые можно заполнить по вашему усмотрению:
      вписать имена виновников торжества, или особые пожелания, добавить дату,
      или логотип <br />
      компании, если речь идьот о корпоративном порядке.
    </p>
    <!--writing titles for sidebar -->
    <input
      id="title1"
      :class="{
        warnning: valid == 3
      }"
      type="text"
      placeholder="Наша свадьба"
      v-model="titles.title1"
    />Заголовок картины
    <br />
    <input
      id="title2"
      :class="{
        warnning: valid == 3
      }"
      type="text"
      placeholder="Анастасия и Констатин"
      v-model="titles.title2"
    />Подпись
    <br />
    <input
      id="title3"
      :class="{
        warnning: valid == 3
      }"
      type="text"
      placeholder="29 июля 2015"
      v-model="titles.title3"
    />Дата события
    <br />
    <!-- buttons gives font for titles in side bar -->
    <div
      v-if="
        titles.title1 === '' || titles.title2 === '' || titles.title3 === ''
      "
    >
      <button
        @click="titlesValidation"
        :class="{
          addFontAriston: font == 1,
          warnning: valid == 3
        }"
      >
        Ariston
      </button>
      <button
        @click="titlesValidation"
        :class="{
          addFontDavinci: font == 2,
          warnning: valid == 3
        }"
      >
        DaVinci
      </button>
      <button
        @click="titlesValidation"
        :class="{
          addFontBrody: font == 3,
          warnning: valid == 3
        }"
      >
        Brody
      </button>
    </div>
    <div v-else>
      <button
        @click="addFontAriston"
        :class="{
          addFontAriston: font == 1,
          warnning: valid == 3
        }"
      >
        Ariston
      </button>
      <button
        @click="addFontDavinci"
        :class="{
          addFontDavinci: font == 2,
          warnning: valid == 3
        }"
      >
        DaVinci
      </button>
      <button
        @click="addFontBrody"
        :class="{
          addFontBrody: font == 3,
          warnning: valid == 3
        }"
      >
        Brody
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["titles", "font", "valid"])
  },
  methods: {
    ...mapMutations([
      "addFontAriston",
      "addFontDavinci",
      "addFontBrody",
      "titlesValidation"
    ])
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
.addFontAriston {
  color: white;
  background-color: rgb(125, 189, 31);
  border: 1px solid rgb(125, 189, 31);
}
.addFontDavinci {
  color: white;
  background-color: rgb(125, 189, 31);
  border: 1px solid rgb(125, 189, 31);
}
.addFontBrody {
  color: white;
  background-color: rgb(125, 189, 31);
  border: 1px solid rgb(125, 189, 31);
}
.warnning {
  border: 1px solid orangered;
  color: orangered;
}
</style>
