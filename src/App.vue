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
  }
}
</script>

<style lang="scss">
  @import "./styles/main.scss";
</style>