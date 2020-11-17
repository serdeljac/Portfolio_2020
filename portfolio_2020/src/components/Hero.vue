<template>
    <div class="hero">

        <div class="hero__background">
  
        <div class="hero__wrapper">

                <div class="hero__header">
                    <div>
                        <header>
                            <h1 class="hero__header-h1">
                                Hello, I'm <span>Stjepan Erdeljac</span>. <br />A <span>front-end developer and designer</span> from Vancouver.
                            </h1>
                            <h3 class="hero__header-h3">
                                I'm a <span>web developer, photographer,</span> and a <span>goal-oriented</span> individual, spending my time at the gym, gardening, and researching inspirational UI trends and styles.
                            </h3>
                        </header>
                        <div class="call_to_action">
                            <button class="btn view_work clickable">View my work</button>
                            <button class="btn contact_me clickable">Contact me</button>
                        </div>
                    </div>
                </div>
        </div>

        </div>

        <svg class="hero__transition" data-name="Hero Transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1961 74">
            <path class="cls-1" d="M1960,0V57.52S1890.64,73.31,1820.35,60c-51-9.65-170.65-21.61-227.18-24.87S1408.39,37.3,1379,42.74s-185.81,14-218.47,19.13C1109.12,70,969.09,76.42,919.26,71c-50-5.43-97.83-3.87-172.83-19.09S610.57,29.3,506.22,46.7s-232.61,19.69-287,19.69-138-3-173.91-6.26S0,54.57,0,54.57V0Z" transform="translate(0.5 0.5)"/>
        </svg>

    </div>
</template>

<script>
    import gsap from 'gsap';

    export default {
        name: "Hero",
        methods: {
            animateSection: function() {
                const tl = gsap.timeline({duration: 0.4});
                tl.to('.hero__wrapper', {duration: 0.8, x: 0, opacity: 1, ease: "ease-out"})
                  .to('.hero__header-h1', {duration: 0.4, opacity: 1, ease: "ease-out"})
                  .to('.hero__header-h3', {duration: 0.4, opacity: 1, ease: "ease-out"})
                  .to('.call_to_action', {duration: 0.4, opacity: 1, ease: "ease-out"});
            }
        },
        mounted() {
            this.animateSection();
        },
    }
</script>

