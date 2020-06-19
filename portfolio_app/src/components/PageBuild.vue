<template>
    <div class="page-container">

        <div class="navigation">
            <nav v-if="!smallDevice">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">work</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">contact</a></li>
                </ul>

            </nav>
        </div>

        <div class="hero">
            <div class="grid grid-column-2">
                <div class="portfolio">
                    <!-- Place portfolio image: black and white, svg, animated -->
                </div>
                <div>
                    <header class="flex center-content header">
                        <div>
                            <h1>Stjepan Josip Erdeljac</h1>
                            <h3>web designer and developer</h3>
                            <p>Find out more </p>
                            <button>Continue</button>
                            <button>View my work</button>
                        </div>
                    </header>
                </div>
            </div>
        </div>

        <main class="main">

            <div class="container">

                <section class="introduction">
                    <div class="wrapper grid">
                        <div class="content group1">
                            <h2>My Motivations</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus enim earum nesciunt cupiditate dicta nulla fugiat ab! Hic suscipit, sapiente necessitatibus sint molestias deleniti deserunt distinctio ut minus repellendus.</p>
                        </div>
                        <div class="content group2">
                            <h2>My Inspirations</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus enim earum nesciunt cupiditate dicta nulla fugiat ab! Hic suscipit, sapiente necessitatibus sint molestias deleniti deserunt distinctio ut minus repellendus.</p>
                        </div>
                        <div class="content group3">
                            <h2>My Practice</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus enim earum nesciunt cupiditate dicta nulla fugiat ab! Hic suscipit, sapiente necessitatibus sint molestias deleniti deserunt distinctio ut minus repellendus.</p>
                        </div>
                    </div>
                    <div class="svg">
                        PLACE SVG HERE
                    </div>
                </section>

                <section class="work">
                    <div class="wrapper">
                        <div class="title">
                            <h2>Work</h2>
                        </div>
                        <div class="content">
                            <div v-for="sites in websites" :key="sites.id" class="website">
                                {{sites.name}}
                            </div>
                        </div>
                        <div class="content">
                            <div v-for="pens in codepen" :key="pens.id" class="codepen">
                                {{pens.name}}
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about">
                    <div class="wrapper">
                        <div class="title">
                            <h2>About</h2>
                        </div>
                        <div class="content grid">
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia at fuga qui dolorem alias perferendis ipsum, accusantium eius temporibus earum saepe voluptate minima animi, modi natus quo consectetur ullam?</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, dignissimos perspiciatis. Ratione quam in autem, consectetur ab deserunt omnis, reprehenderit perferendis nam voluptatum cupiditate!</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="contact">
                    <div class="wrapper">

                    </div>
                </section>


            </div>
        </main>

        <footer>
            <p>Stjepan Erdeljac &copy; 2020</p>
        </footer>
        
    </div>
</template>

<script>
import $ from 'jquery'

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
        {
            id: 4,
            name: 'Garage Door Repair - Scranton',
            href: 'https://www.garagedoorrepairscrantonpa.com/',
            img: '../img/gdr-scranton.jpg',
            date: '2019',
        },
        {
            id: 5,
            name: 'Ly & Associates',
            href: 'https://lyandassociatesfg.com/',
            img: '../img/ly-and-associates.jpg',
            date: '2019',
        },
        {
            id: 6,
            name: 'Spencer Soares',
            href: 'http://www.spencersoares.com/',
            img: '../img/spencer-soares.jpg',
            date: '2017',
        },
        {
            id: 7,
            name: 'Easy NOA',
            href: 'https://www.easynoa.ca/',
            img: '../img/easy-noa.jpg',
            date: '2018',
        },
    ];

const myCodepen = [
    {
        id: 1,
        name: 'style',
        href: 'unknown',
        date: '2313',
    },
    {
        id: 2,
        name: 'style',
        href: 'unknown',
        date: '2313',
    },
    {
        id: 3,
        name: 'style',
        href: 'unknown',
        date: '2313',
    },
    {
        id: 4,
        name: 'style',
        href: 'unknown',
        date: '2313',
    },
    {
        id: 5,
        name: 'style',
        href: 'unknown',
        date: '2313',
    },
];

    export default {
        name: 'FullBuild',
        data() {
            return {
                smallDevice: false,
                scrollTop: 0,
                websites: myWebsites,
                codepen: myCodepen,
            };
        },
        methods: {
            responsiveCheck() {
                const w = $('body').width();
                const mainH = $('main > .container').height();

                w <= 1024 ? this.smallDevice = true : this.smallDevice = false;
                $('.sidebar').height(mainH);
            },
            handleScroll() {
                this.scrollTop = $(window).scrollTop();
            },
        },
        computed: {
            //Sort projects here
        },
        mounted() {
            window.addEventListener('resize', this.responsiveCheck);
            window.addEventListener('scroll', this.handleScroll);
            this.responsiveCheck();
        },
    };

</script>
