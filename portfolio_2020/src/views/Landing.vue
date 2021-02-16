<template>
    <div class="landing" >
            <div class="brand clickable">
                <a href="/">
                    <img src="../assets/brand.png" alt="Stjepan Erdeljac" />
                </a>
            </div>

            <div class="menu open-nav clickable" :class="{close: closeNav}" @click="triggerNavigation">
                <div class="openMenu">
                    <div class="bar-1"></div>
                    <div class="bar-2"></div>
                    <div class="bar-3"></div>
                </div>
                <div class="closeMenu">
                    X
                </div>
            </div>
        <Navigation v-if="navigation" @triggerNavigation="triggerNavigation"/>
        <Hero  @triggerContact="contactForm = !contactForm" />
        <main>
            <WorkWeb />
            <WorkPen v-if="!hide"/>
            <About />
            <Contact @triggerContact="contactForm = !contactForm" />
            <footer class="footer">
                <p>&copy; Made by Stjepan Erdeljac. Circa 2020.</p>
            </footer>
            <ContactForm v-if="contactForm" @triggerContact="contactForm = !contactForm" />
        </main>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Hero from '@/components/Hero';
import WorkWeb from '@/components/Work_web.vue';
import WorkPen from '@/components/Work_pen.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import ContactForm from '@/components/Contact_form.vue';
import $ from 'jquery';
import gsap from 'gsap';

let position = $(window).scrollTop(); 


export default {
  name: "Landing",
  components: { Navigation, Hero, WorkWeb, WorkPen, About, Contact, ContactForm},
  data() {
      return {
          navigation: false,
          contactForm: false,
          closeNav: false,
          hide: true
      }
  },
  methods: {
      triggerNavigation: function() {

          if (this.closeNav == true) {
              
            const closeTl = gsap.timeline({onComplete: this.trigNav});
            closeTl.to('.navigation', {duration: 0.5, opacity: 0, filter: 'blur(100px)', ease: "ease-out"});
            
          }else {
              this.trigNav();
          }
      },
      trigNav: function() {
        this.closeNav = !this.closeNav;
          this.navigation = !this.navigation;
      },
  },
  mounted() {
      $('.cursor').removeClass('active');
      $('.clickable').hover(
          function() {
            $('.cursor').addClass('active');
          },
          function() {
            $('.cursor').removeClass('active');
          }
        );
const scroll = $(window).scrollTop();

        $(window).scroll(function() {
            
            if(scroll > position) {
            $('.brand, .menu').addClass('hide');
            } else {
            $('.navigation').removeClass('hide');
            }
            position = scroll;
        });
  },
  updated() {

      const landing = document.querySelector('body');

      if (this.contactForm == true) {
          landing.classList.add('form_add');
      }else {
          landing.classList.remove('form_add');
      }
  }
}
</script>