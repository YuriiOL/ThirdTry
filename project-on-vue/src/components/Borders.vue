<template>
  <div class="borders">
    <h3>Рама</h3>
    <p>
      Подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же
      не
      <br />просто оставляете "пальчики", а создаете предмет декора для дома и
      офиса:
    </p>
    <div class="container">
      <!-- show all images from store state borders -->
      <!-- onclick give class="highlight" to image and make it visual selected   -->
      <img
        v-for="i in borders"
        :key="i.id"
        :src="i.img"
        @click="
          addborder(i);
          selectBorder(i.id);
        "
        :class="{ highlight: i.id == selectBorders }"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["borders", "selectBorders"])
  },
  methods: {
    ...mapMutations(["addborder", "selectBorder"])
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
  left: 25px;
  height: 300px;
  width: 500px;
  overflow-y: scroll;
}
.container::-webkit-scrollbar {
  display: none;
}
img {
  height: 190px;
  width: 145px;
  border: 1px solid gray;
  float: left;
  margin: 5px;
  border-radius: 10px;
}
img:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.highlight {
  border: 2px solid rgb(148, 218, 45);
  margin: 4px;
}
</style>
