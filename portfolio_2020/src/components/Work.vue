<template>
    <section class="work">
        <div class="section__title">
            <h2>WORK</h2>
        </div>

        <!-- <div class="work__list">
            <div class="site column is-three-quarters">

                <a v-bind:href="site.href">
                    <div class="site__background parallax" v-bind:style="{ 'background-image': 'url(' + myWebsites.img + ')' }"></div>

                    <div class="site__title">
                        <h3>{{ site.name }}</h3>
                        <span>{{ site.date }}</span>
                    </div>
                    
                </a>
            </div>

        </div> -->

        




    </section>
</template>

<script>
    import natalieMiles from "../assets/natalie-miles.jpg";

    const myWebsites = [
        {
            id: 1,
            name: 'Natalie Miles',
            href: 'https://natalie-miles.com/',
            img: natalieMiles,
            date: '2019',
        },
        // {
        //     id: 2,
        //     name: 'Beautiful Brides Philly',
        //     href: 'https://beautifulbridesphilly.com/',
        //     img: '../img/beautiful-brides-philly.jpg',
        //     date: '2019',
        // },
        // {
        //     id: 3,
        //     name: 'Geoff Lee Mortgage',
        //     href: 'https://www.geoffleemortgage.com/',
        //     img: '../img/geoff-lee-mortgage.jpg',
        //     date: '2018',
        // },
        // {
        //     id: 4,
        //     name: 'Garage Door Repair - Scranton',
        //     href: 'https://www.garagedoorrepairscrantonpa.com/',
        //     img: '../img/gdr-scranton.jpg',
        //     date: '2019',
        // },
        // {
        //     id: 5,
        //     name: 'Ly & Associates',
        //     href: 'https://lyandassociatesfg.com/',
        //     img: '../img/ly-and-associates.jpg',
        //     date: '2019',
        // },
        // {
        //     id: 6,
        //     name: 'Spencer Soares',
        //     href: 'http://www.spencersoares.com/',
        //     img: '../img/spencer-soares.jpg',
        //     date: '2017',
        // },
        // {
        //     id: 7,
        //     name: 'Easy NOA',
        //     href: 'https://www.easynoa.ca/',
        //     img: '../img/easy-noa.jpg',
        //     date: '2018',
        // },
    ];


    export default {
        name: "Work",
        data() {
            return {
                sites: myWebsites,
                natalieMiles
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>