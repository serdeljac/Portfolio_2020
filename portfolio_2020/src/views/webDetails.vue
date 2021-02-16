<template>
    <main class="web-details">
        <section class="web-details__meta meta">
            <div class="web-details__header">
                <div class="web-details__site-id animate-hide">
                    <p class="id-tag">0{{ site.id }}</p>
                </div>
                    <router-link :to="{name: 'Welcome'}" tag="button" class="btn go-back clickable animate-hide">
                    &#8610;
                    </router-link>
            </div>

            <div class="web-details__details">
                <h2 class="meta__title animate-hide">{{ site.title }}</h2>
                <p class="meta__description animate-hide">{{ site.desc }}</p>
                <p class="meta__tags animate-hide">{{ site.tags }}</p>
                <a v-bind:href="site.href" target="_blank" class="meta__link clickable animate-hide">
                    <button class="btn btn-view-site">WEBSITE</button>
                </a>

            </div>

            <div class="web-details__navigation animate-hide">
                <router-link 
                    :to="{
                        name: 'web-details', 
                        params: {
                            link: prevSite.link,
                            site: prevSite
                        }
                        }" 
                     class="meta__prev clickable"
                     :class="{disabled: !prevSite}">
                    <button  class="btn btn-previous">PREV</button>
                </router-link>
                <span>|</span>
                <router-link 
                    :to="{
                        name: 'web-details', 
                        params: {
                            link: nextSite.link,
                            site: nextSite

                        }
                        }" 
                    class="meta__next clickable"
                    :class="{disabled: !nextSite}">
                    <button class="btn btn-next">NEXT</button>
                </router-link>
            </div>
            
        </section>
        <aside class="web-details__preview" >
            <div class="loader">
                <Loader />
            </div>
            <img v-bind="imgAttr" />
        </aside>

    </main>
</template>

<script>
import $ from 'jquery';
import gsap from 'gsap';
import Loader from '@/components/Loader.vue';
import websites from '@/shared/websites_info.js';

    export default {
        name: 'web-details',
        data() {
            return {
                prevSite: undefined,
                nextSite: undefined,
                imgAttr: {
                    src: this.site.full,
                    alt: this.site.alt
                },
            }
        },
        components: {Loader},
        props: {
            link: {
                type: String,
            },
            site: {
                type: Object,
            }
        },
        methods: {
            validateLink: function(val) {
                if (val == undefined) {
                    return false;
                } else {
                    return val;
                }
            },
            openAnimation: function() {

                const tl = gsap.timeline(
                {
                    defaults: {duration: 0.45, opacity: 1},
                });

                tl.to('.web-details__site-id', {})
                    .to('.go-back', {}, '-=0.25')
                    .to('.meta__title', {}, '-=0.25')
                    .to('.meta__description', {}, '-=0.25')
                    .to('.meta__tags', {}, '-=0.25')
                    .to('.meta__link', {}, '-=0.25')
                    .to('.web-details__navigation', {}, '-=0.25')

            },
            loader: function() {
                $('.web-details__preview img').removeAttr('style');
                setTimeout(function() {
                    $('.web-details__preview img').css('opacity', 1);
                }, 1000);
            }
        },
        beforeMount() {
            this.prevSite = this.validateLink(websites[0][this.site.id - 1]);
            this.nextSite = this.validateLink(websites[0][this.site.id + 1]);
        },
        mounted() {
            window.scrollTo(0, 0);
            $('.clickable').hover(
                function() {
                $('.cursor').addClass('active');
                },
                function() {
                $('.cursor').removeClass('active');
                }
            );

            this.openAnimation();
            this.fakeLoader();
        },
        updated: function() {
            this.imgAttr.src = "";
            this.imgAttr.alt = "";
            this.prevSite = this.validateLink(websites[0][this.site.id - 1]);
            this.nextSite = this.validateLink(websites[0][this.site.id + 1]);
            this.imgAttr.src = this.site.full
            this.imgAttr.alt = this.site.alt
            window.scrollTo(0, 0);
            this.loader();
        }
    }
</script>

<style lang="scss" scoped>

</style>