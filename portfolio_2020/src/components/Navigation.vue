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
const scroll = new SmoothScroll('a[href*="#"]');


    export default {
        name: 'Navigation',
        data() {
            return {
                scroll
            }
        },
        methods: {
            closeMenu: function() {
                this.$emit('closeMenu');
            }
        },
        
    }
</script>