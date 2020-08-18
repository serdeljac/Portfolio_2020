<template>
    <section class="about">
        

        <div class="about__wrapper">
            <h2>A little about me...</h2>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",
    }
</script>

<style lang="scss" scoped>
    .about {
        position: relative;
        margin-top: 100px;
        // box-shadow: -40px -40px 30px 60px rgba(0,0,0,.9);
        min-height: 700px;
        background: rgba(0,0,0,.9);
        &__wrapper {
            width: 1200px;
            margin: auto;
            border-left: 3px solid #fff;
            min-height: 200px;
            padding: 0 0 0 3em;
            font-size: 1.1rem;
        }
    }

</style>