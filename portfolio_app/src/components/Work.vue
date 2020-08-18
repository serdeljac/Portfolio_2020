<template>

    <section class="work">
        <div class="work__wrapper">
            <div class="work__preview" v-bind:class="{active : openPreview.active}">
                <div class="work__img"></div>
            </div>
            <div class="work__name" 
                v-for="site in websites"
                :key="site.id"
                @mouseover="openPreview.active = true"
                @mouseleave="openPreview.active = false"
                >
                <p class="work__title-name">
                    {{ site.name }}
                </p>
            </div>
        </div>
    </section>
 
</template>

<script>
    import $ from 'jquery';

const myWebsites = [
        {
            id: 1,
            name: 'Natalie Miles',
            href: 'https://natalie-miles.com/',
            img: '../img/natalie-miles.jpg',
            date: '2019',
        },
        {
            id: 2,
            name: 'Beautiful Brides Philly',
            href: 'https://beautifulbridesphilly.com/',
            img: '../img/beautiful-brides-philly.jpg',
            date: '2019',
        },
        {
            id: 3,
            name: 'Geoff Lee Mortgage',
            href: 'https://www.geoffleemortgage.com/',
            img: '../img/geoff-lee-mortgage.jpg',
            date: '2018',
        },
        // {
        //     id: 4,
        //     name: 'Garage Door Repair - Scranton',
        //     href: 'https://www.garagedoorrepairscrantonpa.com/',
        //     img: '../img/gdr-scranton.jpg',
        //     date: '2019',
        // },
        {
            id: 5,
            name: 'Ly & Associates',
            href: 'https://lyandassociatesfg.com/',
            img: '../img/ly-and-associates.jpg',
            date: '2019',
        },
        // {
        //     id: 6,
        //     name: 'Spencer Soares',
        //     href: 'http://www.spencersoares.com/',
        //     img: '../img/spencer-soares.jpg',
        //     date: '2017',
        // },
        {
            id: 7,
            name: 'Easy NOA',
            href: 'https://www.easynoa.ca/',
            img: '../img/easy-noa.jpg',
            date: '2018',
        },
    ];


    export default {
        name: 'Work',
        data() {
            return {
                websites: myWebsites,
                openPreview: {
                    active: false,
                    image: undefined,
                }
            }
        },
        methods: {
            openWork: function() {
                $('.work__name').hide();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .work {
        padding: 40px 0 160px;
        &__name {
            padding: 20px 0;
        &hover p {
            transform: scale(0.7, 1) rotate3d(1, 0, -1, 5deg);
            }
        }

        &__title-name {
            font-family: "Morganite";
            text-transform: uppercase;
            position: relative;
            font-size: 10em;
            letter-spacing: -0.10em;
            text-align: center;
            transform: scale(0.5, 0.8) rotate3d(1, 0, -1, 5deg);
            line-height: 1;
            transition: transform .23s ease-in-out;
        }

        &__preview {
            position: fixed;
            max-width: 50vw;
            width: 500px;
            height: 100vh;
            background: red;
            top: 0;
            right: 5%;
            z-index: 19;
            opacity: 0;
            transition: all .23s ease;
            &.active {
                opacity: 1;
            }
        }
    }
</style>