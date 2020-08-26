<template>
  <div class="wrapper">
    <Header></Header>
    <SideBar></SideBar>
    <Pictures></Pictures>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";
import Pictures from "@/components/Pictures.vue";
export default {
  name: "Wrapper",
  components: { Header, SideBar, Footer, Pictures }
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
