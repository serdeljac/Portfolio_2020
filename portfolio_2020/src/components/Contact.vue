<template>
    <div class="contact">

        <!-- <div class="section__title">
            <h2>CONTACT</h2>
        </div> -->

        <div class="wrapper">

            <div class="social_contacts">
                <p>Find me on:</p>
                <div class="social_lists">
                    <a 
                        v-for="links in social"
                        :key="links.id"
                        v-bind:href="links.href"
                        target="_blank"
                        class="link clickable"
                    >
                        <socialIcons :nameOfSocial="links.icon" />
                        <span>{{ links.name }}</span>
                    </a>
                </div>
                
            </div>
            <div class="get_in_touch">
                    <span>Ready to </span><button class="btn clickable">GET IN TOUCH</button><span>?</span>
                </div>

        </div>
    </div>
</template>

<script>

import socialIcons from "@/components/Social_icons.vue";

    const social = [
        {
            id: 1,
            name: '/Stjepan.Erdeljac/',
            href: 'https://www.facebook.com/Stjepan.Erdeljac/',
            icon: 'facebook',
        },
        {
            id: 2,
            name: '/serdeljac',
            href: 'https://twitter.com/serdeljac',
            icon: 'twitter',
        },
        {
            id: 3,
            name: '/in/serdeljac/',
            href: 'https://www.linkedin.com/in/serdeljac/',
            icon: 'linkedin',
        },
        {
            id: 4,
            name: '/serdeljac',
            href: 'https://github.com/serdeljac',
            icon: 'github',
        },
        {
            id: 5,
            name: '/serdeljac',
            href: 'https://codepen.io/serdeljac/',
            icon: 'codepen',
        },
        {
            id: 6,
            name: 'hi@stjepanerdeljac.com',
            href: 'mailto:hi@stjepanerdeljac.com',
            icon: 'email',
        },
        {
            id: 7,
            name: 'pluralsight',
            href: 'https://app.pluralsight.com/profile/stjepan-erdeljac',
            icon: 'pluralsight',
        }
    ];

    export default {
        name: "Contact",
        components: { socialIcons },
        data() {
            return {
                social,
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>