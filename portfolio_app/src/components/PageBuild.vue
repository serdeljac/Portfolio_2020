<template>
    <div class="page-content">

        


            



    
    </div>
</template>

<script>
import $ from 'jquery';

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

                // this.mouseX = e.offsetX;                
                // const adjustSun = ((this.mouseX / this.winW) * 100) - 50;
                // const sunX = adjustSun / 2;
                // const sunY = adjustSun / 16;
                // $('.sun').css('transform', 'translate3D('+ sunX +'px, '+ -sunY +'px, 0px)');


            },

        },

    };

</script>
