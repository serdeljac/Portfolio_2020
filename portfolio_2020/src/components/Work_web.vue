<template>
    <section id="web" class="web">
        <div class="section__title title-web">
            <h2>WEB</h2>
            <p>selected projects built for clients...</p>
        </div>
        <div class="web__container">
            <div 
                class="item__wrapper"
                :class="`item-${site.id}`"
                v-for="site in websites"
                :key="site.id"
                >
                <router-link
                :to="{ 
                name: 'web-details', 
                params: { 
                    link: site.link,
                    site: site
                    }
                }">
                    <div class="item clickable">
                        <div 
                            class="item__display" 
                            v-bind:style="{backgroundImage: 'url('+site.img+')'}"
                            >
                        </div>
                        <div class="item__meta">
                            <span>{{ site.title }}</span>
                            <p class="view_more">0{{ site.id }} | view more 🡢</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

    </section>
</template>

<script>
import websites from '@/shared/websites_info.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

    export default {
        name: "Work_web",
        data() {
            return {
                websites: websites[0]
            }
        },
        mounted() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to('.item__wrapper', {
                scrollTrigger: {
                    trigger: '.title-web',
                    markers: true,
                    start: "top center"
                }, 
                opacity: 1, 
                duration: 3})
        },
    }
</script>
