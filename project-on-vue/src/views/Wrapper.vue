<template>
  <div class="wrapper">
    <Header></Header>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "Wrapper",
  components: { Header }
};
</script>
