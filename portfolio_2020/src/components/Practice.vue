<template>
    <section class="practice">

        <div class="section__title">
            <h2>PRACTICE</h2>
        </div>

        <div class="practice__display">

            <div class="card card-1 clickable" @mouseenter="liftCard" @mouseleave="hideCard">
                <div class="logo">
                    <img src="@/assets/wp_logo.png" class="logo_square" alt="Wordpress" />
                </div>
                <h3 class="card_header">Create and customize wordpress templates</h3>
                <p>From picking templates to back-end customization of wordpress functions 
                    and performance optimization, I can build you a responsive and secure 
                    site that’s easy for users to maintain and update.</p>
            </div>

            <div class="card card-2 clickable" @mouseenter="liftCard" @mouseleave="hideCard">
                <div class="logo">
                    <img src="@/assets/vue_logo.png" class="logo_square" alt="Vue" />
                    <img src="@/assets/adobe_logo.png" class="logo_square" alt="Adobe" />
                    <img src="@/assets/webflow_logo.png" class="logo_square" alt="Webflow" />
                </div>
                <h3 class="card_header">Adaptive to various technologies</h3>
                <p>Though I primarily work with wordpress and use Vue.JS for building web 
                    applications, there’s no hesitation when being asked to use or learn 
                    other web technologies to get the project done right.</p>
            </div>

            <div class="card card-3 clickable" @mouseenter="liftCard" @mouseleave="hideCard">
                <div class="logo">
                    <img src="@/assets/asana_logo.png" alt="Asana" />
                    <img src="@/assets/slack_logo.png" alt="Slack" />
                </div>
                <h3 class="card_header">Adaptive to various technologies</h3>
                <p>Though I primarily work with wordpress and use Vue.JS for building web 
                    applications, there’s no hesitation when being asked to use or learn 
                    other web technologies to get the project done right.</p>
            </div>
        </div>
    </section>
</template>

<script>
    // import $ from 'jquery';
    import gsap from 'gsap';

    export default {
        name: "Practice",
        methods: {
            liftCard: function(e) {
                // e.target.classList.add("active");
                const card = e.target;
                const tl = gsap.to(card, {transformStyle:"preserve-3d", rotateZ: 0, rotateX: 0}, 'linear');
                tl.play();
            },
            hideCard: function(e) {
                const card = e.target;
                const tl = gsap.to(card, {transformStyle:"preserve-3d", rotateX: 75}, 'linear');
                tl.play();
                setTimeout(
                    // function() {
                    //     e.target.classList.remove("active");
                    // }, 1600
                );
                
            }
        }
    }
</script>