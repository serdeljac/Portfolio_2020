<template>
    <div class="hero">
        <div class="hero__content">
            <div class="hero__wrapper">
                <h1 class="hero__header">
                    Hello, I'm
                    <strong>Stjepan Erdeljac</strong>. 
                    A <br /><strong>web developer and designer</strong><br /> from Vancouver.
                </h1>
                <h3 class="hero__sub-header">
                    I'm a <strong>wordpress developer, photographer,</strong> and a <strong>goal-oriented</strong> individual. When not coding, I spend my time at the gym, gardening, and researching inspirational UI trends and styles.
                </h3>
                <div class="hero__buttons">
                    <button class="btn hero__learn-more">view my projects</button>
                    <button class="btn hero__contact-me">contact me</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Hero',
    }
</script>

<style lang="scss" scoped>

    @import "@/design/index.scss";

    .hero {
        min-height: 100vh;
        max-width: 100vw;
        width: 100%;

        &__content {
            display: grid;
            height: 100vh;
            max-width: 1000px;
            margin-left: 100px;
            align-content: center;
            position: relative;
            z-index: 20;
        }

        &__wrapper {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            height: 60vh;
            align-content: center;
        }

        &__header {
            font-weight: 300;
            font-size: 3.5rem;
            padding: 0.3em 0;
        }

        &__sub-header {
            font-weight: 300;
            font-size: 2rem;
            padding: 0.3em 0;
        }

        &__learn-more {
            border: 0;
            background-color: #fff;
            font-size: 1.5rem;
            min-width: 300px;
            margin-right: 50px;
        }

        &__contact-me {
            border: 3px solid #fff;
            background-color: transparent;
            color: #fff;
            min-width: 300px;
            font-size: 1.5rem;
        }
    }

</style>