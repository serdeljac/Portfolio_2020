<template>
    <div>

        <div class="debugValues">
            <p>Width = {{ winW }}</p>
            <p>Display = {{ displayView }}</p>
        </div>
        
        <div class="navigation_bar"></div>

        <section class="hero">
            <div class="hero__wrapper">

                <div class="hero__header">
                    <header>
                        <h1 class="">
                            This is <span>Stjepan Erdeljac</span>. <br />A <span>front-end developer and designer</span> from Vancouver.
                        </h1>

                        <h3>
                            He's a <span>wordpress developer, photographer,</span> and a <span>goal-oriented</span> individual. When not coding, he spends his time at the gym, gardening, and researching inspirational UI trends and styles.
                        </h3>
                    </header>
                    <div class="call_to_action">
                        <button class="btn view_work">View my Work</button>
                        <button class="btn contact_me">Contact me</button>
                    </div>
                </div>












                
            </div>
        </section>














    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "FullPage",
        data() {
            return {
                desktopWidth: 1024,
                tabletWidth: 768,
                winW: 0,
                winH: 0,
                displayView: undefined,
            }
        },
        methods: {
            getDimensions: function() {

                const browserWidth = $(window).width();
                const browserHeight = $(window).height();
                this.winW = browserWidth;
                this.winH = browserHeight;
                
                switch(true) {
                    
                    case browserWidth >= this.desktopWidth:
                        this.displayView = "desktop";
                        break;
                    case browserWidth >= this.tabletWidth:
                        this.displayView = "tablet";
                        break;
                    case browserWidth >= 0:
                        this.displayView = "mobile";
                        break;
                }
            }
        },
        mounted() {
            this.getDimensions();
            window.addEventListener('resize', this.getDimensions);
            // window.addEventListener('scroll', this.handleScroll);
            // window.addEventListener('wheel', this.scrollWindow);
            // window.addEventListener('mousemove', this.mouseMove);
        },
    }
</script>
