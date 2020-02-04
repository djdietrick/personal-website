<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    let faScript = document.createElement('script'); 
    faScript.setAttribute('src', 'https://kit.fontawesome.com/a39a4bd9a8.js');
    document.head.appendChild(faScript);

    let fontSheet = document.createElement('link');
    fontSheet.setAttribute('href', 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
    fontSheet.setAttribute('rel', 'stylesheet');
    document.head.append(fontSheet);
  }
}
</script>

<style lang="scss">
  @import "./styles/main.scss";
</style>