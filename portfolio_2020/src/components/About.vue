<template>
    <section class="about">

        <div class="section__title">
            <h2>ABOUT</h2>
        </div>

        <div class="about__wrapper">
            <div class="about__content">
                <h3>Get to know me</h3>

                <p>In the past few years, I have taken an intrest in the creative minds of designers and artists that have helped me find a calling in web development.</p>

                <p>The mindset of a developer and designer pushed me into a mindset where one can create quality and inspirational work that I found helped inspire others to also take part.</p>

                <div class="traits">
                    <div
                        class="trait "
                        v-for="trait in traits"
                        :key="trait.id">
                            <label class="toggle__container clickable" @click="trickToggle($event, trait.trigger)">
                                <input class="switch" type="checkbox" v-bind:checked="trait.trigger" disabled>
                                <span class="slider"></span>
                                {{ trait.name }}
                            </label>
                    </div>
                </div>
            </div>
        </div>

         <p class="skills">
            HTML/CSS/JS, Node.JS, jQuery, Bootstrap, Bulma, Git, PHP, npm, SASS/Less, Vue.JS, WordPress, Webflow, Asana, Figma, Photoshop, Illustrator, UI/UX
        </p>

    </section>
</template>

<script>
const traits = [
    {
        id: 1,
        name: 'motivation',
        trigger: true
    },
    {
        id: 2,
        name: 'energy',
        trigger: true
    },
    {
        id: 3,
        name: 'dedication',
        trigger: true
    },
    {
        id: 4,
        name: 'focus',
        trigger: true
    },
    {
        id: 5,
        name: 'excuses',
        trigger: false
    },
    {
        id: 6,
        name: 'negativity',
        trigger: false
    },
]

export default {
    data() {
        return {
            
            traits
        }
    },
    methods: {
        trickToggle: function(e, trig) {

            const select = e.target.querySelector('.switch');
            const timeout = 100;

            if (trig == true) {

                select.checked = false;
                e.target.style.pointerEvents = "none";

                setTimeout(function() {

                    select.checked = true;
                    e.target.style.pointerEvents = "auto";
                }, timeout);

            } else {

                select.checked = true;
                e.target.style.pointerEvents = "none";

                setTimeout(function() {

                    select.checked = false;
                    e.target.style.pointerEvents = "auto";

                }, timeout);
                
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>