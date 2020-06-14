<template>
  <div>
    <PageBuild />
  </div>
</template>

<script>
  import PageBuild from '@/components/PageBuild.vue';
  

  export default {
    name: 'app',
    components: {
      PageBuild
    }
  }
</script>

<style lang="scss">
    @import "design/index.scss";
</style>