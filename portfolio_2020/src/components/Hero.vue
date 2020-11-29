<template>
    <div class="hero">

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
                    <a href="#web"><button class="btn view_work clickable">View my work</button></a>
                    <button class="btn contact_me clickable">Contact me</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import gsap from 'gsap';

    export default {
        name: "Hero",
        methods: {
            animateSection: function() {
                const tl = gsap.timeline({duration: 0.4});
                tl.to('.hero', {duration: 0.8, x: 0, filter: 'opacity(100%)', ease: "ease-out"})
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

<style lang="scss" scoped>

</style>