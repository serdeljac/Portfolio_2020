<template>
  <div class="site__wrapper">
    <Hero :responsive='responsive' />
    <main>
      <Work />
      <Practice />
      <About />
    </main>
    <Contact />
    <footer class="footer">
      <p>&copy; Made by Stjepan Erdeljac. Circa 2020.</p>
    </footer>
    <div class="dot"></div>
    <div class="cursor_animate">
      <svg id="svg_cursor" width="50" height="50" data-name="Cursor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.38 97.38">
        <circle class="cursor_circle" cx="48.69" cy="48.69" r="42.5"/>
      </svg>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Work from '@/components/Work.vue';
import Practice from '@/components/Practice.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import $ from 'jquery';

export default {
  name: "Assemble",
  components: { Hero, Work, Practice, About, Contact },
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
      mouseMove: function(e) {
          const cursorDot = document.querySelector('.dot');
          const cursorSvg = document.querySelector('.cursor_animate');
          const x = e.pageX;
          const y = e.pageY;

          cursorDot.style.left = `${(x-2)}px`;
          cursorDot.style.top =  `${(y-2)}px`;

          cursorSvg.style.left = `${(x-24)}px`;
          cursorSvg.style.top =  `${(y-24)}px`;
          
      }
      
  },
  mounted() {
      this.getDimensions();
      window.addEventListener('resize', this.getDimensions);
      // window.addEventListener('scroll', this.mouseMove);
      // window.addEventListener('wheel', this.mouseMove);
      window.addEventListener('mousemove', this.mouseMove);
      
      $('.clickable').hover(
        function() {
          $('.cursor_animate').addClass('active--clickable');
        },
        function() {
          $('.cursor_animate').removeClass('active--clickable');
        }
      );

  }
}


</script>

<style lang="scss">
  @import './design/index.scss';
</style>