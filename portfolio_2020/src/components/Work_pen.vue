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
                <a v-bind:href="pen.href" target="_blank">
                    <div class="item"  v-bind:style="{backgroundImage: 'url('+pen.img+')'}"></div>
                    <p class="item__meta"> {{ pen.name }}</p>
                </a>
            </div>
        </div>
    </section>
</template>



<script>
import pens from '@/shared/pens_info.js';

    export default {
        name: 'Work_pen',
        data() {
            return {
                pens
            }
        }
    }
</script>
