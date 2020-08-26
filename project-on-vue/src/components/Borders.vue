<template>
  <div class="borders">
    <h3>Borders</h3>
    <p>
      для начала выберите основу, саму картину, на которую вы и гости вашего праздника
      <br />будете наносить отпечатки пальцев с пожеланиями
    </p>
    <div class="container">
      <div class="imgbox"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
  left: 23px;
  border: 1px solid gray;
  height: 300px;
  width: 500px;
}
.imgbox {
  height: 140px;
  width: 100px;
  border: 1px solid gray;
}
</style>