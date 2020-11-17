<template>
    <!-- <section class="work"> 
        
        <div class="section__title">
            <h2>PEN</h2>
        </div>

        <div class="work__pen-display"> 
            <div 
                class="pen"
                v-for="pen in pens"
                :key="pen.id"
                >
                <p>
                    <a 
                        v-bind:href="pen.href"
                        target="_blank"
                        class="pen__link clickable">{{ pen.name }}</a>
                </p>
            </div>
        </div>

    </section> -->
    <section class="work">
        <div class="section__title">
            <h2>WEB</h2>
            <p>selected projects built for clients...</p>
        </div>

        <div class="work__wrapper columns is-multiline is-half-desktop">
            <div 
                class="work__display column is-one-third"
                v-for="site in sites"
                :key="site.id"
                :class="`item-${site.id} ${site.display}`"
                >
                <div class="website clickable">
                    <div class="website__cover" v-bind:style="{backgroundImage: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2),rgba(0,0,0,1)),url('+site.img+')'}">
                        <div class="view_more">
                            
                        </div>
                    </div>
                    <div class="meta__data">
                        <p>{{ site.name }}</p>
                        <hr />
                        <p>0{{ site.id }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section__title" v-if="!hide">
            <h2>PEN</h2>
            <p>Some side projects for all to use...</p>
        </div>

        <div class="work__display" v-if="!hide">
            <div class="pen">
                <ul
                v-for="pen in pens"
                :key="pen.id"
                >
                    <li class="pen__name clickable">
                        <a v-bind:href="pen.href" target="_blank">
                        {{ pen.name }}
                        </a>
                    </li>
                </ul>
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
                pens,
                hide: true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>