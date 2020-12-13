<template>
    <div class="landing" v-if="!contactForm">
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

            <div class="menu open-nav clickable" @click="triggerNavigation">
                <div class="hamburger">
                    <div class="bar-1"></div>
                    <div class="bar-2"></div>
                    <div class="bar-3"></div>
                </div>
            </div>
        <Navigation v-if="navigation" @triggerNavigation="navigation = !navigation"/>
        <Hero @closeMenu="contactForm = !contactForm" @triggerContact="contactForm = !contactForm" />
        <main>
            <WorkWeb />
            <WorkPen />
            <About />
            <Contact @triggerContact="contactForm = !contactForm" />
            <footer class="footer">
                <p>&copy; Made by Stjepan Erdeljac. Circa 2020.</p>
            </footer>
            
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


export default {
  name: "Landing",
  components: { Navigation, Hero, WorkWeb, WorkPen, About, Contact},
  data() {
      return {
          navigation: false,
          contactForm: false
      }
  },
  methods: {
      triggerNavigation: function() {
          this.navigation = !this.navigation;
      },
      triggerContact: function() {
        this.contactForm = !this.contactForm;
        this.triggerContactApp();
      },
      triggerContactApp: function() {
            this.$emit('triggerContactApp');
        }
  }
}
</script>