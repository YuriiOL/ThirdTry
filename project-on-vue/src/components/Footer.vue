<template>
  <div class="footer">
    <div class="price">
      Стоимость:
      <span class="numbers">
        {{ sum }}
        <span class="grn">грн</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["sum"])
  }
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  border-top: 1px solid gray;
  width: 550px;
  height: 60px;
}
.price {
  position: absolute;
  right: 30px;
  top: 20px;
}
.numbers {
  color: rgb(124, 187, 30);
  font-size: 25px;
  font-weight: bold;
}
.grn {
  font-size: 15px;
}
</style>