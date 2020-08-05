<template>
    <div class="page-bg" id="main-background">
        <div class="sun" data-depth="0.2"></div>
    </div>
</template>

<script>
import Parallax from 'parallax-js';

    export default {
        name: "Backdrop",
        mounted() {            
            const scene = document.getElementById('main-background');
            const parallaxInstance = new Parallax(scene);
            parallaxInstance.friction(0.2, 0.2);
        },
    }
</script>

<style lang="scss" scoped>

    @import "@/design/index.scss";

    .page-bg {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        z-index: 1;
        background-color: $colorPalet1;

        .sun {
            width: 800px;
            height: 800px;
            transition: transform .23s ease-out;
            border-radius: 800px;
            background: linear-gradient(166.66deg, #0F000E 8.81%, #540032 36.71%, #C9283E 83.28%);
            box-shadow: 3px 95px 108px rgba(240, 67, 58, 0.1);
        }

    }
</style>