<template>
    <section class="pens">
        <div class="section__title">
            <h2>PEN</h2>
            <p>personally developed pens on Codepen...</p>
        </div>

        <div class="pens__container">
            <ul>
                <li 
                    class="pen"
                    v-for="pen in pens"
                    :key="pen.id">
                    <a 
                        v-bind:href="pen.href"
                        target="_blank"
                        class="pen__link clickable">0{{ pen.id }} - {{ pen.name }}</a>
                </li>
            </ul>

            <div class="pen__display">
                <div class="pen__display-frame">

                </div>
            </div>

        </div>


    </section>
</template>



<script>

const pens = [
    {
        id: 1,
        name: 'Cursor animations',
        href: 'https://codepen.io/serdeljac/pen/LYZxdYx',
        img: '',
    }, 
    {
        id: 2,
        name: 'Custom scrollbars',
        href: 'https://codepen.io/serdeljac/pen/LYZxdYx',
        img: '',
    },
    {
        id: 3,
        name: '3D Card flip transition',
        href: 'https://codepen.io/serdeljac/pen/LYZxdYx',
        img: '',
    }
];
    export default {
        name: 'Work_pen',
        data() {
            return {
                pens
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>