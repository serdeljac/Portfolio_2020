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
                <a class="clickable" @click="toPage(site.link, site)">
                    <div class="item" :class="`item-animate-${site.id}`">
                        <div class="item__transition-mask-1"></div>
                        <div class="item__transition-mask-2"></div>
                        <div class="item__display" v-bind:style="{backgroundImage: 'url('+site.img+')'}"></div>
                        <div class="item__meta">
                            <div>
                                <p>{{ site.title }}</p>
                                <p class="view_more">0{{ site.id }} | view more 🡢</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </section>
</template>

<script>
import websites from '@/shared/websites_info.js';
import gsap from 'gsap';

    export default {
        name: "Work_web",
        data() {
            return {
                websites: websites[0],
                openLink: '',
                openSite: []
            }
        },
        methods: {
            toPage: function(siteLink, siteArr) {

                this.openLink = siteLink;
                this.openSite = siteArr;

                const tl = gsap.timeline(
                {
                    defaults: {duration: 0.35, x:0},
                    onComplete: this.changePage,
                });

                tl.to('.item__transition-mask-1', {})
                    .to('.item__transition-mask-2', {})

            },
            changePage: function() {
                this.$router.push({name: 'web-details', params: {link: this.openLink, site: this.openSite}})
            }
        }
    }

</script>
