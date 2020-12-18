<template>
    <section id="pens" class="pens">
        <div class="section__title">
            <h2>PEN</h2>
            <p>personally developed pens on Codepen...</p>
        </div>

        <div class="pens__container">
            <div 
                class="pens__wrapper clickable"
                :class="`pens-animate-${pen.id}`"
                v-for="pen in pens"
                :key="pen.id"
                >
                <div class="item"  v-bind:style="{backgroundImage: 'url('+pen.img+')'}"></div>
                <p class="item__meta"> {{ pen.name }}</p>
            </div>
        </div>
    </section>
</template>



<script>
import pens from '@/shared/pens_info.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

    export default {
        name: 'Work_pen',
        data() {
            return {
                pens
            }
        },
        mounted() {
            gsap.registerPlugin(ScrollTrigger);

            const targets = gsap.utils.toArray('.pens__wrapper');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pens__wrapper',
                    start: "-400px 70%",
                }});

            for(let i = 1; i <= targets.length; i++) {

                tl.to('.pens-animate-' + i, {
                    y: 0,
                    opacity: 1,
                    scale: 0.8,
                    duration: 0.4
                    })

            }

        }
    }
</script>
