<template>
  <div class="site__wrapper">
     <div class="debugValues">
        <!-- <p>Width = {{ responsive.width }}</p>
        <p>Height = {{ responsive.height }}</p> -->
    </div>
    <Hero :responsive='responsive' />
    <main>
      <Work />
      <Practice />
      <About />
    </main>
    <div id="cursor">
      <div class="ring"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Work from './components/Work.vue';
import Practice from './components/Practice.vue';
import About from './components/About.vue';

export default {
  name: "Assemble",
  components: { Hero, Work, Practice, About },
  data() {
      return {
          responsive: {
            xl: 1280,
            lg: 992,
            md: 768,
            sm: 576,
            width: 0,
            height: 0,
          },
      }
  },
  methods: {
      getDimensions: function() {

          const browserWidth = window.screen.width;
          const browserHeight = window.screen.height;
          this.responsive.width = browserWidth;
          this.responsive.height = browserHeight;

      },
      mouseMove: function() {
          // const cursor = document.getElementById('cursor');
          // cursor.style(e.clientX);
          // console.log(e.clientX);
      },
      
  },
  mounted() {
      this.getDimensions();
      window.addEventListener('resize', this.getDimensions);
      // window.addEventListener('scroll', this.handleScroll);
      // window.addEventListener('wheel', this.scrollWindow);
      window.addEventListener('mousemove', this.mouseMove);
  },
}


</script>

<style lang="scss">
  @import './design/index.scss';
  
</style>