<template>
<<<<<<< HEAD
    <div class="backdrop" id="main-background">
        <div class="backdrop__sun" data-depth="0.2"></div>
=======
    <div class="page-bg">
        <div class="sun"></div>
>>>>>>> 6f60ad83f5b9e76c583f4dc7a34e221315a5d577
    </div>
</template>

<script>

    export default {
        name: "Backdrop",
<<<<<<< HEAD
        mounted() {
            const scene = document.getElementById('main-background');
            const parallaxInstance = new Parallax(scene);
            parallaxInstance.friction(0.2, 0.2);
        },
=======
>>>>>>> 6f60ad83f5b9e76c583f4dc7a34e221315a5d577
    }
</script>

<style lang="scss" scoped>

    @import "@/design/index.scss";

    .backdrop {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        background-color: $colorPalet1;

        .backdrop__sun {
            width: 800px;
            height: 800px;
            transition: transform .23s ease-out;
            border-radius: 800px;
            background: linear-gradient(166.66deg, #0F000E 8.81%, #540032 36.71%, #C9283E 83.28%);
            box-shadow: 3px 95px 108px rgba(240, 67, 58, 0.1);
        }

    }
</style>