<template>
  <div class="pictures">
    <h3>Цвет отпечатков</h3>
    <p>
      наконец, подберите самые подходящие цвета красок, с помощью которых вы и
      <br />оставите на картине свой след на память!
    </p>
    <div class="container">
      <img
        v-for="i in colors"
        :key="i.id"
        :src="i.img"
        @click="addColors(i); i.select = true"
        v-bind:class="{select: i.select}"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["colors", "chosenColors"])
  },
  methods: {
    ...mapMutations(["addColors"])
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
img:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.select {
  border: 2px solid rgb(148, 218, 45);
  margin: 4px;
}
</style>
