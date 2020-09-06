<template>
  <div id="app">
    
    <Fullpage />
  </div>
</template>

<script>
import Fullpage from './components/Fullpage.vue'

export default {
  name: "Assemble",
  components: { Fullpage }

}
</script>

<style lang="scss">
  @import './design/index.scss';
  
</style>