<template>
  <div class="page">
    <Backdrop />
    <div class="page-container">
      <Hero />
      <main>
        <Work />
      </main>
    </div>
  </div>
</template>

<script>
  import Backdrop from '@/components/Backdrop.vue';
  import Hero from '@/components/Hero.vue';
  import Work from '@/components/Work.vue';
  

  export default {
    name: 'app',
    components: {
      Backdrop,
      Hero,
      Work,
    }
  }
</script>

<style lang="scss">
    @import "design/index.scss";

    
</style>