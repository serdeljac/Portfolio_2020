<template>
    <div class="loader">
        <div class="loader__wrapper">
            <div class="loader__letters">
                <span class="let_1">N</span>
                <span class="let_2">O</span>
                <span class="let_3">W</span>
                <span class="let_4">L</span>
                <span class="let_5">O</span>
                <span class="let_6">A</span>
                <span class="let_7">D</span>
                <span class="let_8">I</span>
                <span class="let_9">N</span>
                <span class="let_10">G</span>
                <div class="let_11">.</div>
                <div class="let_12">.</div>
                <div class="let_13">.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap';

    export default {
        name: "Loader",
        mounted() {

        const repDelay = 0.8 ;

        const    tl = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.0, repeat: -1});
        const   tl2 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.2, repeat: -1});
        const   tl3 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.3, repeat: -1});
        const   tl4 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.4, repeat: -1});
        const   tl5 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.5, repeat: -1});
        const   tl6 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.6, repeat: -1});
        const   tl7 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.7, repeat: -1});
        const   tl8 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.8, repeat: -1});
        const   tl9 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 0.9, repeat: -1});
        const   tl0 = gsap.timeline({duration: 0, repeatDelay: repDelay, delay: 1.0, repeat: -1});

 
      tl.to('.let_1', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_1', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_1', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_1', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_1', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl2.to('.let_2', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_2', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_2', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_2', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_2', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl3.to('.let_3', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_3', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_3', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_3', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_3', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl4.to('.let_4', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_4', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_4', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_4', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_4', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl5.to('.let_5', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_5', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_5', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_5', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_5', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl6.to('.let_6', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_6', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_6', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_6', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_6', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl7.to('.let_7', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_7', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_7', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_7', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_7', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl8.to('.let_8', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_8', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_8', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_8', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_8', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl9.to('.let_9', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_9', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_9', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_9', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_9', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

     tl0.to('.let_10', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_10', {duration: 0.1, scaleY: 1, y: -20, ease: "ease-out"})
        .to('.let_10', {duration: 0.1, y: 0, ease: "ease-out"})
        .to('.let_10', {duration: 0.1, scaleY: 0.4, y: -6, ease: "ease-out"})
        .to('.let_10', {duration: 0.1, scaleY: 1, y: 0, ease: "ease-out"});

        }
    }
</script>

<style lang="scss" scoped>
    .loader {
        width: 100%;
        height: 100%;
        display: grid;
        align-content: center;
        justify-content: center;

        &__wrapper {
            padding-top: 20px;
            overflow: hidden;
        }

        &__letters {
            display: flex;
            font-size: 40px;
            font-weight: bold;
            span {transform-origin: 0 100%;}
            .let_3 {margin-right: 10px;}
        }
    }

</style>