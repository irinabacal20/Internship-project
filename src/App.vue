<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
:root {
  --first-color: #F1FAEE;
  --second-color: #E63946;
  --third-color: #1D3557;
  --text-color: #212529;
  --margin-left: 150px;
  --margin-right: 150px;
  --menu-option-font-size: 17px;
  --footer-font-size: 15px;
  --general-font: "Century Gothic";
  --button-border-radius: 5px;
  --button-border: solid 1px var(--second-color);
  --button-hover: #55a630;
  --button-hover-border: solid 1px var(--button-hover);
  --box-shadow: -1px 3px 15px -5px rgba(0, 0, 0, 0.76);
}
</style>
