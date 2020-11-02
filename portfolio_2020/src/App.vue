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
    <div class="cursor">
      <div class="cursor__dot"></div>
      <div class="cursor__circle"></div>
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

          const cursorDot = document.querySelector('.cursor__dot');
          const cursorCircle = document.querySelector('.cursor__circle');

          const x = e.pageX;
          const y = e.pageY;

          cursorDot.style.left = `${(x-2)}px`;
          cursorDot.style.top =  `${(y-2)}px`;

          cursorCircle.style.left = `${(x-22)}px`;
          cursorCircle.style.top =  `${(y-22)}px`;
          
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
          $('.cursor').addClass('active');
        },
        function() {
          $('.cursor').removeClass('active');
        }
      );

  }
}


</script>

<style lang="scss">
  @import './design/index.scss';
</style>