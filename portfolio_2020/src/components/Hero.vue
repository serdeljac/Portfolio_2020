<template>
    <div class="hero">
        <div class="hero__wrapper">
            <div class="hero__header">
                <div class="hero__profile-mobile" v-if="responsive.width <= responsive.md"></div>
                <header>
                    <h1>
                        This is <span>Stjepan Erdeljac</span>. <br />A <span>front-end developer and designer</span> from Vancouver.
                    </h1>

                    <h3>
                        He's a <span>wordpress developer, photographer,</span> and a <span>goal-oriented</span> individual. When not coding, he spends his time at the gym, gardening, and researching inspirational UI trends and styles.
                    </h3>
                </header>
                <div class="call_to_action">
                    <button class="btn view_work">View my work</button>
                    <button class="btn contact_me">Contact me</button>
                </div>
            </div>
            <div class="hero__profile" v-if="responsive.width > responsive.md">
                <div class="img__wrapper"> 
                    <img src="../assets/hero_img_1.jpg" alt="Stjepan Erdeljac" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hero",
        props: ['responsive'],
    }
</script>

