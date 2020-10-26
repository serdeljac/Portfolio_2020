<template>
    <section class="work">

        <div class="section__title">
            <h2>WEB</h2>
        </div>

        <div class="work__display">
            <div class="display__sites">
                <div 
                    v-for="site in sites"
                    :key="site.id"
                    class="website clickable"
                    :class="'item-'+site.id"
                    @click="openPreview"
                    v-bind:style="{backgroundImage: 'url('+site.img+')'}"
                    >
                        <div class="label">
                            <p>{{ site.name }}</p>
                            <hr />
                            <p>{{ site.date }}</p>
                        </div>
                </div>
            </div>
        </div>

        
        <div class="section__title">
            <h2>PEN</h2>
        </div>

        <SitePreview v-if="preview"/>

    </section>
</template>

<script>
import natalieMiles from "@/assets/nm_web.jpg";
import bridesphilly from "@/assets/bbp_web.jpg";
import lyassociates from "@/assets/lya_web.jpg";
import easynoa from "@/assets/en_web.jpg";
import glmortgage from "@/assets/glm_web.jpg";
import SitePreview from '@/components/Site_preview.vue';

    const sites = [
        {
            id: 1,
            name: 'Natalie Miles',
            href: 'https://natalie-miles.com/',
            img: natalieMiles,
            date: '2019',
        },
        {
            id: 2,
            name: 'Beautiful Brides Philly',
            href: 'https://beautifulbridesphilly.com/',
            img: bridesphilly,
            date: '2019',
        },
        {
            id: 3,
            name: 'Geoff Lee Mortgage',
            href: 'https://www.geoffleemortgage.com/',
            img: glmortgage,
            date: '2018',
        },
        {
            id: 4,
            name: 'Ly & Associates',
            href: 'https://lyandassociatesfg.com/',
            img: lyassociates,
            date: '2019',
        },
        {
            id: 5,
            name: 'Easy NOA',
            href: 'https://www.easynoa.ca/',
            img: easynoa,
            date: '2018',
        },
    ];


    export default {
        name: "Work",
        components: { SitePreview },
        data() {
            return {
                sites,
                preview: false
            }
        },
        methods: {
            openPreview: function() {
                this.preview = true;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>