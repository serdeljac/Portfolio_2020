<template>
  <div class="site__wrapper">
    <Hero />
    <main>
      <Work />
      
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
// import Practice from '@/components/Practice.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import $ from 'jquery';

export default {
  name: "Assemble",
  components: { Hero, Work, About, Contact },
  methods: {
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