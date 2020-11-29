<template>
  <div class="site__wrapper">

    <div class="brand clickable">
        <a href="/">
            <svg data-name="Brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.7 81.7">
                <text transform="translate(40.9 61.23)" style="font-size: 60px;fill: #fff;font-family: MongolianBaiti, Mongolian Baiti">3</text>
                <text transform="translate(10.38 60.46)" style="font-size: 60px;fill: #fff;font-family: MongolianBaiti, Mongolian Baiti">S</text>
                <path d="M40.85,81.2A40.35,40.35,0,0,1,.5,40.85" style="fill: none;stroke: #fff;stroke-miterlimit: 10"/>
                <path d="M14.16,10.59A40.35,40.35,0,0,1,75.25,62" style="fill: none;stroke: #fff;stroke-miterlimit: 10"/>
            </svg>
        </a>
    </div>

    <div class="menu open-nav clickable" @click="openMenu">
        <div class="hamburger">
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
        </div>
    </div>

    <transition name="navTransition">
      <Navigation v-if="menu" @closeMenu="menu = !menu"/>
    </transition>
    <Hero @closeMenu="contactForm = !contactForm" />
    <main>
      <WorkWeb />
      <WorkPen />
      <About />
      <Contact @closeMenu="contactForm = !contactForm" />
      <footer class="footer">
        <p>&copy; Made by Stjepan Erdeljac. Circa 2020.</p>
      </footer>
    </main>
    <ContactForm v-if="!contactForm" />
    <Preview v-if="!hide" />
    <div class="cursor">
      <div class="cursor__dot"></div>
      <div class="cursor__circle"></div>
    </div>
    
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Hero from '@/components/Hero.vue';
import WorkWeb from '@/components/Work_web.vue';
import WorkPen from '@/components/Work_pen.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Preview from '@/components/Site_preview.vue';
import ContactForm from '@/components/Contact_form.vue';
import $ from 'jquery';
// import gsap from 'gsap';

export default {
  name: "Assemble",
  components: { Navigation, Hero, WorkWeb, WorkPen, About, Contact, ContactForm, Preview },
  data() {
    return {
      hide: true,
      xDot: 0,
      yDot: 0,
      xCircle: 0,
      yCircle: 0,
      menu: false,
      contactForm: true
    }
  },
  methods: {
      mouseMove: function(e) {

          const cursorDot = document.querySelector('.cursor__dot');
          const cursorCircle = document.querySelector('.cursor__circle');
          
          if (e) {
            this.xDot = e.pageX - 2;
            this.yDot = e.pageY - 2;

            this.xCircle = e.pageX - 22;
            this.yCircle = e.pageY - 22;

            cursorDot.style.left = `${(this.xDot)}px`;
            cursorDot.style.top =  `${(this.yDot)}px`;

            cursorCircle.style.left = `${(this.xCircle)}px`;
            cursorCircle.style.top =  `${(this.yCircle)}px`;
          }
      },
      openMenu: function() {
                // const tl = gsap.timeline({onComplete: myFunction, repeat: 2, repeatDelay: 1, yoyo: true});
                this.menu = !this.menu;
            },
      closeMenu: function() {
          this.menu = !this.menu;
      },
      changeState: function() {
          this.menu = !this.menu;
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