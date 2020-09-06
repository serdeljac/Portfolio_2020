<template>
  <div id="app">
     <div class="debugValues">
        <p>Width = {{ winW }}</p>
        <p>Height = {{ winH }}</p>
        <p>Display = {{ displayView }}</p>
    </div>
    <Hero />
    <Work />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Work from './components/Work.vue';
import $ from 'jquery';

export default {
  name: "Assemble",
  components: { Hero, Work },
  data() {
      return {
          desktopWidth: 1024,
          tabletWidth: 768,
          winW: 0,
          winH: 0,
          displayView: undefined,
      }
  },
  methods: {
      getDimensions: function() {

          const browserWidth = $(window).width();
          const browserHeight = $(window).height();
          this.winW = browserWidth;
          this.winH = browserHeight;
          
          switch(true) {
              
              case browserWidth >= this.desktopWidth:
                  this.displayView = "desktop";
                  break;
              case browserWidth >= this.tabletWidth:
                  this.displayView = "tablet";
                  break;
              case browserWidth >= 0:
                  this.displayView = "mobile";
                  break;
          }
      }
  },
  mounted() {
      this.getDimensions();
      window.addEventListener('resize', this.getDimensions);
      // window.addEventListener('scroll', this.handleScroll);
      // window.addEventListener('wheel', this.scrollWindow);
      // window.addEventListener('mousemove', this.mouseMove);
  },
}


</script>

<style lang="scss">
  @import './design/index.scss';
  
</style>