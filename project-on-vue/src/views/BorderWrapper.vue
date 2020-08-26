<template>
  <div class="wrapper">
    <Header></Header>
    <SideBar></SideBar>
    <Borders></Borders>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";
import Borders from "@/components/Borders.vue";
export default {
  name: "Wrapper",
  components: { Header, SideBar, Footer, Borders }
};
</script>
<style scoped>
.wrapper {
  border: 1px solid gray;
  border-radius: 20px;
  width: 800px;
  height: 500px;
  position: relative;
}
</style>
