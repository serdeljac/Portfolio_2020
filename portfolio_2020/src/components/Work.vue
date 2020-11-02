<template>
    <section class="work">

        <div class="section__title">
            <h2>WEB</h2>
        </div>

        <div class="work__display">
            <div 
                v-for="site in sites"
                :key="site.id"
                class="display__grid "
                :class="`item-${site.id} ${site.display}`"
                >
                <div class="website clickable" v-bind:style="{backgroundImage: 'url('+site.img+')'}">
                    <div class="label">
                        <p>{{ site.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section__title">
            <h2>PEN</h2>
        </div>

        <div class="pens__display"> 
            <div 
                class="pens__list"
                v-for="pen in pens"
                :key="pen.id"
                >
                <p>{{ pen.name }}</p>
            </div>
        </div>

    </section>
</template>

<script>

import natalieMiles from "@/assets/nm_web.jpg";
import bridesphilly from "@/assets/bbp_web.jpg";
import lyassociates from "@/assets/lya_web.jpg";
import easynoa from "@/assets/en_web.jpg";
import glmortgage from "@/assets/glm_web.jpg";
import gsap from 'gsap';
import $ from 'jquery';

const sites = [
    {
        id: 1,
        name: 'Natalie Miles',
        href: 'https://natalie-miles.com/',
        img: natalieMiles,
        date: '2019',
        display: 'end'
    },
    {
        id: 2,
        name: 'Beautiful Brides Philly',
        href: 'https://beautifulbridesphilly.com/',
        img: bridesphilly,
        date: '2019',
        display: 'start'
    },
    {
        id: 3,
        name: 'Geoff Lee Mortgage',
        href: 'https://www.geoffleemortgage.com/',
        img: glmortgage,
        date: '2018',
        display: 'end'
    },
    {
        id: 4,
        name: 'Ly & Associates',
        href: 'https://lyandassociatesfg.com/',
        img: lyassociates,
        date: '2019',
        display: 'end'
    },
    {
        id: 5,
        name: 'Easy NOA',
        href: 'https://www.easynoa.ca/',
        img: easynoa,
        date: '2018',
        display: 'start'
    },
];

const pens = [
    {
        id: 1,
        name: 'SVG Shape change using GSAP',
        href: 'https://codepen.io/serdeljac/pen/LYZxdYx',
        img: '',
    }
];


    export default {
        name: "Work",
        data() {
            return {
                sites,
                pens
            }
        },
        mounted() {
            const website = $('.website');
            const tl = gsap.timeline({repeat: 0, defaults: {duration: 2}});
            tl.to(website, {y: 50});
            tl.pause();
            
            $('.website').hover(
                function() {
                    tl.play();
                },
                function() {
                    tl.reverse();
                }
            );

        }
    }
</script>

<style lang="scss" scoped>

</style>