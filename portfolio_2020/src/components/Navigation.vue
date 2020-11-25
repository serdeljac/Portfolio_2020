<template>
    <div class="navigation" v-bind:class="{active: menu}">

        <div class="brand clickable">
            <a href="#">
                <svg data-name="Brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.7 81.7">
                    <text transform="translate(40.9 61.23)" style="font-size: 60px;fill: #fff;font-family: MongolianBaiti, Mongolian Baiti">3</text>
                    <text transform="translate(10.38 60.46)" style="font-size: 60px;fill: #fff;font-family: MongolianBaiti, Mongolian Baiti">S</text>
                    <path d="M40.85,81.2A40.35,40.35,0,0,1,.5,40.85" style="fill: none;stroke: #fff;stroke-miterlimit: 10"/>
                    <path d="M14.16,10.59A40.35,40.35,0,0,1,75.25,62" style="fill: none;stroke: #fff;stroke-miterlimit: 10"/>
                </svg>
            </a>
        </div>

        <div class="menu open-nav clickable" @click="openMenu">
            <div class="hamburger ">
                <div class="bar-1"></div>
                <div class="bar-2"></div>
                <div class="bar-3"></div>
            </div>
        </div>

        <div class="main_nav" v-if="menu">

                <nav>
                    <ul>
                        <li><a @click="closeMenu" href="#" item-num="01">Home</a></li>
                        <li><a @click="closeMenu" href="#web" item-num="02">Web</a></li>
                        <li><a @click="closeMenu" href="#pens" item-num="03">Pens</a></li>
                        <li><a @click="closeMenu" href="#about" item-num="04">About</a></li>
                        <li><a @click="closeMenu" href="#contact" item-num="05">Contact</a></li>
                    </ul>
                </nav>

        </div>

    </div>
</template>

<script>
import gsap from 'gsap';

    export default {
        name: 'Navigation',
        data() {
            return {
                menu: false
            }
        },
        methods: {
            openMenu: function() {
                // const tl = gsap.timeline({onComplete: myFunction, repeat: 2, repeatDelay: 1, yoyo: true});
                this.menu = !this.menu;
            },
            closeMenu: function() {
                this.menu = !this.menu;
            },
            changeState: function() {
                this.menu = !this.menu;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>