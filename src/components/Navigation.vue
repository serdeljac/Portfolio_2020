<template>
    <div class="navigation">
        <nav>
            <ul class="navigation__container">
                <li><a class="clickable" @click="closeMenu" href="#" item-num="01">Home</a></li>
                <li><a class="clickable" @click="closeMenu" href="#web" item-num="02">Web</a></li>
                <li><a class="clickable" @click="closeMenu" href="#pens" item-num="03">Pens</a></li>
                <li><a class="clickable" @click="closeMenu" href="#about" item-num="04">About</a></li>
                <li><a class="clickable" @click="closeMenu" href="#contact" item-num="05">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import SmoothScroll from 'smooth-scroll';
import gsap from 'gsap';
const openTl = gsap.timeline({});


const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false,
    speed: 300,
    easing: 'easeOutCubic'
});


    export default {
        name: 'Navigation',
        data() {
            return {
                scroll
            }
        },
        methods: {
            closeMenu: function() {
                const closeTl = gsap.timeline({onComplete: this.trigClose});
                closeTl.to('.navigation', {duration: 0.5, opacity: 0, filter: 'blur(100px)', ease: "ease-out"});
            },
            trigClose: function() {
                this.$emit('triggerNavigation')
            },
            
        },
        mounted() {
            openTl.to('.navigation', {duration: 0.5, opacity: 1, filter: 'blur(0px)', ease: "ease-out"});
            openTl.to('.navigation__container', {duration: 0.8, opacity: 1, ease: "ease-out"})
        },
    }
</script>