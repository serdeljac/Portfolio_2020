<template>
    <section id="web" class="web">
        <div class="section__title">
            <h2>WEB</h2>
            <p>selected projects built for clients...</p>
        </div>

        <div class="web__container">
            <div 
                class="item__wrapper"
                :class="`item-${site.id}`"
                v-for="site in sites"
                :key="site.id"
                >
                <router-link :to="{ name: 'web-details', params: { id: site.id, link: site.link }}">
                    <div class="item clickable">
                        <div 
                            class="item__display" 
                            v-bind:style="{backgroundImage: 'url('+site.img+')'}"
                            >
                        </div>
                        <div class="item__meta">
                            <span>{{ site.name }}</span>
                            <p class="view_more">0{{ site.id }} | view more 🡢</p>
                        </div>
                    </div>
                </router-link>
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
        // href: 'https://natalie-miles.com/',
        link: 'nataliemiles',
        img: natalieMiles,
        date: '2019',
    },
    {
        id: 2,
        name: 'Beautiful Brides Philly',
        // href: 'https://beautifulbridesphilly.com/',
        link: 'beautifulbridesphilly',
        img: bridesphilly,
        date: '2019',
    },
    {
        id: 3,
        name: 'Geoff Lee Mortgage',
        // href: 'https://www.geoffleemortgage.com/',
        link: 'geoffleemortgage',
        img: glmortgage,
        date: '2018',
    },
    {
        id: 4,
        name: 'Ly & Associates',
        // href: 'https://lyandassociatesfg.com/',
        link: 'lyassociates',
        img: lyassociates,
        date: '2019',
    },
    {
        id: 5,
        name: 'Easy NOA',
        // href: 'https://www.easynoa.ca/',
        link: 'easynoa',
        img: easynoa,
        date: '2018',
    },
];


    export default {
        name: "Work_web",
        data() {
            return {
                sites,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>