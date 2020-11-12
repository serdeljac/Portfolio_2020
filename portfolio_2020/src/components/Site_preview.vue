<template>
    <div class="preview">

        <div class="preview__background">

        </div>

        <div class="preview__content">
            <div class="display"></div>
            <div class="details">
                <div class="close"></div>
                <div class="title"></div>
                <div class="description"></div>
                <div class="site_link"></div>
                <div class="navigation">
                    <div class="arrow left">←</div>
                    <span>|</span>
                    <div class="arrow right">→</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // import gsap from 'gsap';

    export default {
        name: "Site Preview",
        methods: {
            openTransition: function() {
                console.log('test');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>