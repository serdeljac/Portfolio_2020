<template>
    <section id="about" class="about">

        <div class="section__title">
            <h2>ABOUT</h2>
        </div>

        <div class="about__container">

            <div class="about__content">

                <div class="about__paragrapgh">
                    <h3>Get to know me</h3>
                    <p>Since beginning my journey into web development nearly 3 years ago, I’ve done remote work for business professionals, grew my passionate skills by working on personal projects, and event hosted local meetups for developers, to help educate in web development and design.</p>
                    <p>I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
                    <p>My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. My greatest motivation is being useful to thought who need my skills for something that matters to them.</p>
                </div>

                <div class="about__traits">
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

                <div class="about__skillset">
                    <p>
                        HTML/CSS/JS, Node.JS, jQuery, Bootstrap, Bulma, Git, PHP, npm, SASS/Less, Vue.JS, WordPress, Webflow, Asana, Figma, Photoshop, Illustrator, UI/UX
                    </p>
                </div>

            </div>
            <div class="about__profile"></div>

        </div>

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