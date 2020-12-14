<template>
  <div class="site__wrapper">

    <router-view />

    <div class="cursor">
      <div class="cursor__dot"></div>
      <div class="cursor__circle"></div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery';
  import gsap from 'gsap';

  export default {
    name: "Assemble",
    mounted() {

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