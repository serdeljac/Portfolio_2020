<template>
    <div>
        <section class="work">
            <div class="work__wrapper">
                <div class="work__name" v-for="site in websites" :key="site.id">
                    <p class="site-name">
                        {{ site.name }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

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
            }
        },

    }
</script>

<style lang="scss" scoped>
    .site-name {
        font-family: "Morganite";
        text-transform: uppercase;
        font-size: 10em;
        letter-spacing: -0.10em;
        text-align: right;
        transform: scale(0.7, 1) translate(0,0) rotate3d(1, 0, -1, 5deg);
        line-height: 1;
        transition: transform .23s ease-in-out;
        &:hover {
            transform: scale(0.7, 1) translate(0,-50px) rotate3d(0, 0, 0, 0deg);
        }
    }
</style>