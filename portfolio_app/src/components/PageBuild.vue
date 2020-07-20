<template>
    <div class="page-container">

        <div class="debug-container">
            <p>Win Width: {{ winW }}</p>
            <p>Win Height: {{ winH }}</p>
            <p>Scroll Loc: {{ scrollTop }}</p>
            <p>Mouse X: {{ mouseX }}</p>
            <p>Small Device: <span v-if="smallDevice">True</span> <span v-else>False</span></p>
            <p>Navigation Open: <span v-if="navOpen">True</span> <span v-else>False</span></p>
        </div>

        <!-- <div class="navigation" :class="{ active: navOpen }">
            

            <div class="menu-button" @click="toggleNav">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="menu" v-if="navOpen">
                <div class="wrapper">
                    <nav>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">work</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">resume</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                        <hr>
                        <div class="grid social-media">
                            <a 
                                v-for="social in socialMedia"
                                :key="social.name"
                                v-bind:href="social.link"
                                target="_blank"
                            >
                                <div>{{ social.name }}</div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div> -->
        <div class="page-bg">
            <div class="page-bg__sun-layer">
                <div class="demo-sun">
                </div>
            </div>
            <div class="page-bg__sun-reflection"></div>
            <div class="page-bg__rain"></div>
        </div>


        <div class="frame-scroll-bar">
            <div class="page-content">
                <div class="hero">
                    <div class="hero__content">
                        <div class="hero__wrapper">
                            <h1 class="hero__header">
                                Hello, I'm
                                <strong>Stjepan Erdeljac</strong>. 
                                 A <br /><strong>web developer and designer</strong><br /> from Vancouver.
                            </h1>
                            <h3 class="hero__sub-header">
                                I'm a <strong>wordpress developer, photographer,</strong> and a <strong>goal-oriented</strong> individual. When not coding, I spend my time at the gym, gardening, and researching inspirational UI trends and styles.
                            </h3>
                            <div class="hero__buttons">
                                <button class="btn hero__learn-more">view my projects</button>
                                <button class="btn hero__contact-me">contact me</button>
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    <section class="work">
                        <div class="work__wrapper">
                            <div class="work__name" v-for="site in websites" :key="site.id">
                                <svg viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                                    <text x="0" y="15">{{ site.name }}</text>
                                </svg>
                            </div>
                        </div>
                    </section>
                </main>
            </div>




        </div>



    
    </div>
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
const mySocialMedia = [
    {
        name: 'facebook',
        imgPos: '0px 0px',
        link: 'https://www.facebook.com/Stjepan.Erdeljac',
    },
    {
        name: 'twitter',
        imgPos: '0px 0px',
        link: 'https://twitter.com/serdeljac',
    },
    {
        name: 'instagram',
        imgPos: '0px 0px',
        link: 'https://www.instagram.com/stjepanerdeljac/',
    },
    {
        name: 'github',
        imgPos: '0px 0px',
        link: 'https://github.com/serdeljac',
    },
    {
        name: 'codepen',
        imgPos: '0px 0px',
        link: 'https://codepen.io/serdeljac/',
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
                navOpen: false,
                winW: 0,
                winH: 0,
                mouseX: 0,
                socialMedia: mySocialMedia,
            };
        },
        methods: {
            responsiveCheck() {
                
                const w = $('body').width();
                const h = $('body').height();
                const mainH = $('main > .container').height();
                this.winW = w;
                this.winH = h;

                w <= 1024 ? this.smallDevice = true : this.smallDevice = false;
                $('.sidebar').height(mainH);

            },
            handleScroll() {

                const loc = $(window).scrollTop();
                this.scrollTop = loc;

            },
            toggleNav() {

                this.navOpen = !this.navOpen;

            },
            scrollWindow(event) {

                const page = $('.page-content');
                let myScroll = event.deltaY;
                myScroll > 0 ? myScroll = 60 : myScroll = -60;
                const scroll = this.scrollTop + myScroll;
                scroll < 0 ?  this.scrollTop = 0 : this.scrollTop = scroll;
                page.css('transform', 'translateY( -'+ this.scrollTop +'px)');
                
            },
            mouseMove(e) {

                this.mouseX = e.offsetX;
                
                const adjustSun = ((this.mouseX / this.winW) * 100) - 50;
                const sunX = adjustSun / 2;
                const sunY = adjustSun / 16;
                $('.demo-sun').css('transform', 'translate3D('+ sunX +'px, '+ -sunY +'px, 0px)');

            },

        },
        mounted() {

            window.addEventListener('resize', this.responsiveCheck);
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('wheel', this.scrollWindow);
            window.addEventListener('mousemove', this.mouseMove);
            this.responsiveCheck();
            // this.mouseMove();
        },
    };

</script>
