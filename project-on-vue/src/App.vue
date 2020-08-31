<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@font-face {
  font-family: "Ariston";
  src: local("ariston"),
    url(./fonts/ariston/ariston-webfont.ttf) format("truetype");
}
@font-face {
  font-family: "Davinci";
  src: local("davinci"),
    url(./fonts/davinci/davinci-webfont.ttf) format("truetype");
}
@font-face {
  font-family: "Brody";
  src: local("brody"),
    url(./fonts/brody/jabgndg5-webfont.ttf) format("truetype");
}
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: grey;
}
</style>
