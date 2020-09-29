<template>
  <!-- Cant go to othe steps befor all elements no selected -->
  <div class="header">
    <div v-if="chosenColors.length < 1">
      <div v-if="$router.history.current.name == 'Wrapper'" class="bold">
        1 Изображение
      </div>
      <div v-else>1 Изображение</div>
      <div v-if="$router.history.current.name == 'Borders'" class="bold">
        2 Рама
      </div>
      <div v-else>2 Рама</div>
      <div v-if="$router.history.current.name == 'Titles'" class="bold">
        3 Заголовок
      </div>
      <div v-else>3 Заголовок</div>
      <div class="last bold" v-if="$router.history.current.name == 'Colors'">
        4 Цвет Отпечатков
      </div>
      <div class="last" v-else>
        4 Цвет Отпечатков
      </div>
    </div>
    <!-- Can go to another element -->
    <div v-else>
      <div v-if="$router.history.current.name == 'Wrapper'" class="bold">
        1 Изображение
      </div>
      <div v-else @click="$router.push('/')">1 Изображение</div>
      <div v-if="$router.history.current.name == 'Borders'" class="bold">
        2 Рама
      </div>
      <div v-else @click="$router.push('/borders')">2 Рама</div>
      <div v-if="$router.history.current.name == 'Titles'" class="bold">
        3 Заголовок
      </div>
      <div v-else @click="$router.push('/titles')">3 Заголовок</div>
      <div class="last bold" v-if="$router.history.current.name == 'Colors'">
        4 Цвет Отпечатков
      </div>
      <div class="last" v-else @click="$router.push('/colors')">
        4 Цвет Отпечатков
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["chosenColors"])
  }
};
</script>

<style scoped>
div {
  float: left;
  border-right: 1px solid gray;
  padding: 0px 30px 0px 10px;
  margin-right: 22px;
  font-size: 14px;
}
.last {
  margin-left: -10px;
  border-right: none;
}
.header {
  padding: 10px;
  border-right: none;
  border-bottom: 1px solid gray;
}
.bold {
  font-weight: bold;
}
</style>