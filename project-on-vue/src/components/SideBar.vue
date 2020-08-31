s<template>
  <div class="sideBar">
    <div class="sideHead">Ваша картина</div>
    <div class="textInfo">
      <p>
        Изображение:
        <span class="title" v-if="chosenPics != ''">{{chosenPics[0].name}}</span>
      </p>
      <p>
        Рама:
        <span class="title" v-if="chosenBorder != ''">{{chosenBorder[0].name}}</span>
      </p>
      <p>
        Отпечатки:
        <img class="colors" v-for="j in chosenColors" :key="j.id" :src="j" alt />
      </p>
    </div>
    <div class="chosenElement">
      <div
        class="title1"
        :class="{
          addFontAriston: font == 1,
          addFontDavinci: font == 2,
          addFontBrody: font == 3
        }"
      >{{ titles.title1 }}</div>
      <div
        class="title2"
        :class="{
          addFontAriston: font == 1,
          addFontDavinci: font == 2,
          addFontBrody: font == 3
        }"
      >{{ titles.title2 }}</div>
      <div
        class="title3"
        :class="{
          addFontAriston: font == 1,
          addFontDavinci: font == 2,
          addFontBrody: font == 3
        }"
      >{{ titles.title3 }}</div>
      <img class="Pics" v-if="chosenPics != ''" :src="chosenPics[0].img" alt />
      <img class="Border" v-if="chosenBorder != ''" :src="chosenBorder[0].img" alt />
    </div>
    <button @click="$router.push('/borders')" v-if="$router.history.current.name == 'Wrapper'">ДАЛЕЕ</button>
    <button @click="$router.push('/titles')" v-if="$router.history.current.name == 'Borders'">ДАЛЕЕ</button>
    <button @click="$router.push('/colors')" v-if="$router.history.current.name == 'Titles'">ДАЛЕЕ</button>
    <button @click="orderPrice(); send()" v-if="$router.history.current.name == 'Colors'">В КОРЗИНУ</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "chosenBorder",
      "chosenPics",
      "titles",
      "font",
      "chosenColors",
      "order"
    ])
  },
  methods: {
    ...mapMutations(["orderPrice"]),
    send() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: this.order })
      };
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(response => response.json())
        .then(data => (this.postId = data.id));
    }
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
  position: relative;
}
.Pics {
  z-index: 1;
  position: absolute;
  margin: 20px;
  width: 139px;
  height: 209px;
}
.Border {
  z-index: 0;
  position: absolute;
  width: 180px;
  height: 250px;
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
.title1,
.title2,
.title3 {
  width: 100px;
  text-align: center;
  z-index: 2;
  position: absolute;
  left: 40px;
  top: 35px;
  font-size: 15px;
}
.title2 {
  left: 40px;
  top: 185px;
}
.title3 {
  left: 40px;
  top: 205px;
}
.addFontAriston {
  font-family: Ariston;
}
.addFontDavinci {
  font-family: Davinci;
}
.addFontBrody {
  font-family: Brody;
}
.colors {
  width: 13px;
  height: 13px;
  margin-left: 3px;
  border-radius: 3px;
}
.title {
  font-weight: bold;
}
</style>
