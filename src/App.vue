<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="in-out">
      <div v-if="initialized">
        <Apps />
        <About />
        <Projects />
        <Contact />
      </div>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Apps from './components/Apps.vue';
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue"
import { setTimeout } from 'timers';

export default {
  name: 'App',
  components: {
    Header,
    Apps,
    About,
    Projects,
    Contact
  },
  data() {
    return {
      initialized: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.initialized = true
    }, 4000);
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";

#app {
  display: flex;
  flex-direction: column;
  width: 98vw;
}

</style>

