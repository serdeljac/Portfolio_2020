<template>
    <section class="work">
        <div class="section__title">
            <h2>WORK</h2>
        </div>

        <div class="work__select">
            <ul>
                <li class="cursor-action" 
                    :class="{active: display=='websites'}"
                    @click="changeDisplay('websites')">websites</li>
                <li class="cursor-action"
                    :class="{active: display=='codepen'}"
                    @click="changeDisplay('codepen')">codepen</li>
                <li class="cursor-action"
                    :class="{active: display=='photography'}"
                    @click="changeDisplay('photography')">photography</li>
            </ul>
        </div>

        <div class="work__display">
            <Websites  />
            <Codepen />
            <Photography />
        </div>

    </section>
</template>

<script>

    import Websites from './Work_websites.vue';
    import Codepen from './Work_codepen.vue';
    import Photography from './Work_photography.vue';

    // import { TimelineLite } from 'gsap';

    export default { 
        name: "Work",
        components: { Websites, Codepen, Photography },
        data() {
            return {
                display: 'websites'
            }
        },
        methods: {
            changeDisplay: function(e) {
                this.display = e;
            },
        },
    }
    
</script>

<style lang="scss" scoped>

</style>