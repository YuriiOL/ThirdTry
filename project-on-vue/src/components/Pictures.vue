<template>
  <div class="pictures">
    <h3>Выберите изображение</h3>
    <p>
      для начала выберите основу, саму картину, на которую вы и гости вашего
      <br />праздника будете наносить отпечатки пальцев с пожеланиями
    </p>
    <div class="container">
      <!-- show all images from store state pics -->
      <!-- onclick give class="highlight" to image and make it visual selected   -->
      <img
        v-for="i in pics"
        :key="i.id"
        :src="i.img"
        @click="
          addpics(i);
          selectPicss(i.id);
        "
        :class="{ highlight: i.id == selectPics }"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["pics", "selectPics"])
  },
  methods: {
    ...mapMutations(["addpics", "selectPicss"])
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
  left: 25px;
  height: 300px;
  width: 500px;
  overflow-y: scroll;
  padding-left: 10px;
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
