<template>
  <div class="site__wrapper">



    
    <router-view />
    
    <Preview v-if="!hide"/>

    <div class="cursor">
      <div class="cursor__dot"></div>
      <div class="cursor__circle"></div>
    </div>
    
  </div>
</template>

<script>

import Preview from '@/components/Site_preview.vue';

import $ from 'jquery';

export default {
  name: "Assemble",
  components: { Preview },
  data() {
    return {
      hide: true,
      xDot: 0,
      yDot: 0,
      xCircle: 0,
      yCircle: 0,
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

            cursorDot.style.left = `${this.xDot}px`;
            cursorDot.style.top =  `${this.yDot}px`;

            cursorCircle.style.left = `${this.xCircle}px`;
            cursorCircle.style.top =  `${this.yCircle}px`;
          }
      },

      
  },

  mounted() {
      
      window.addEventListener('mousemove', this.mouseMove);
    document.getElementsByTagName('body')[0].onscroll = () => {     this.mouseMove; };\
      // window.onscroll = this.mouseMove;
      
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