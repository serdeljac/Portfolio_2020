<template>
  <div class="site__wrapper">

    


    <router-view />

    <div class="cursor" v-show="!device">
      <div class="cursor__dot"></div>
      <div class="cursor__circle"></div>
    </div>

  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { isMobile, isSafari } from 'mobile-device-detect';
gsap.registerPlugin(ScrollTrigger);

  export default {
    name: "Assemble",
    data() {
      return {
        device: isMobile || isSafari,
      }
    },
    methods: {
        heroAnimate: function() {
            const tl = gsap.timeline({duration: 0.4
            });

            tl.from('.hero', {duration: 0.8, x: 0, filter: 'opacity(0)', ease: "ease-out"})
                .from('.hero__header-h1', {duration: 0.4, opacity: 0, ease: "ease-out"})
                .from('.hero__header-h3', {duration: 0.4, opacity: 0, ease: "ease-out"}, '-=0.2')
                .from('.call_to_action', {duration: 0.4, opacity: 0, ease: "ease-out"}, '-=0.1');
        },
        webWorkAnimate: function() {

            const targets = gsap.utils.toArray('.item__wrapper');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.web',
                    start: "300px 70%",
                }});

            for(let i = 1; i <= targets.length; i++) {

                tl.from('.item-animate-' + i, {
                    rotationY: -50,
                    y: 1200,
                    opacity: 0.1,
                    duration: 0.4
                    }, '-=0.3')
            }
        },
        penWorkAnimate: function() {
          
            const targets = gsap.utils.toArray('.pens__wrapper');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pens__wrapper',
                    start: "-400px 70%",
                }});

            for(let i = 1; i <= targets.length; i++) {

                tl.from('.pens-animate-' + i, {
                    y: 400,
                    opacity: 0,
                    duration: 0.4
                    }, '-=0.3')

            }
        },
        customCursor: function() {

          gsap.set(".cursor__circle", {xPercent: 0, yPercent: 0});
          gsap.set(".cursor__dot", {xPercent: 0, yPercent: 0});

          const circle = document.querySelector(".cursor__circle");
          const ball = document.querySelector(".cursor__dot");
          const pos = { x: document.body.clientWidth / 2, y: document.body.clientHeight / 2 };
          const mouse = { x: pos.x, y: pos.y };
          const speed = 0.7;

          const xSet = gsap.quickSetter(circle, "x", "px");
          const ySet = gsap.quickSetter(circle, "y", "px");
          const ballxSet = gsap.quickSetter(ball, "x", "px");
          const ballySet = gsap.quickSetter(ball, "y", "px");

          window.addEventListener("mousemove", e => {    
            mouse.x = e.x;
            mouse.y = e.y;  
          });

          gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
            
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
            ballxSet(pos.x);
            ballySet(pos.y);
          });

        }
    },
    mounted() {

      if (!this.device) {
        this.customCursor();
      }
      this.heroAnimate();
      this.webWorkAnimate();
      this.penWorkAnimate();
    }
  }
</script>

<style lang="scss">
  @import './design/index.scss';
</style>