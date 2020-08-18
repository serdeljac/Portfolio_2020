<template>
  <div class="page">
    <div class="cursor">
        <div class="cursor__ring"></div>
        <div class="cursor__dot"></div>
    </div>
    <div class="navButton" @click="navActive =!navActive">

    </div>
    <Navigation v-if="navActive"/>
    <Backdrop />
    <div class="page-container">
      <Hero />
      <main>
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Backdrop from "@/components/Backdrop.vue";
import Navigation from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import Work from "@/components/Work.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";


export default {
  name: "app",
  components: {
    Backdrop,
    Navigation,
    Hero,
    Work,
    About,
    Contact,
    Footer
  },
  data() {
    return {
      navActive: false,
    }
  },
  methods: {
    appendMouse: function() {
      
      $(window).mousemove(function (e) {
        const x = e.pageX;
        const y = e.pageY - 15;

        const cursorRing = document.querySelector(".cursor__ring");
        const cursorDot = document.querySelector(".cursor__dot");

        cursorRing.style.transform = `translate(${x}px, ${y}px)`;
        cursorDot.style.transform = `translate(${x}px, ${y}px)`;

      });

    },
  },
  created() {
    this.appendMouse();
  },
}
</script>

<style lang="scss">
@import "design/index.scss";
.page-container {
    position: relative;   
}
.navButton {
  width: 70px;
  height: 70px;
  background: #fff;
  position: fixed;
  right: 10%;
  top: 40px;
}
</style>