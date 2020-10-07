<template>
    <section class="work">
        <div class="section__title">
            <h2>WORK</h2>
        </div>

        <div class="work__catagories">
            <ul>
                <li class="cursor-action" :class="{active: 'display'=='websites'}">websites</li>
                <li class="cursor-action">codepen</li>
                <li class="cursor-action">photography</li>
            </ul>
        </div>

        <div class="work__display">
            <Websites />
            <Codepen />
            <Photography />
        </div>

    </section>
</template>

<script>

    import Websites from './Work_websites.vue';
    import Codepen from './Work_codepen.vue';
    import Photography from './Work_photography.vue';

    export default { 
        name: "Work",
        components: { Websites, Codepen, Photography },
        data() {
            return {
                display: 'websites'
            }
        },
    }
    
</script>

<style lang="scss" scoped>

</style>