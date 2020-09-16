<template>
    <div class="hero">
        <div class="hero__wrapper">
            <div class="hero__header">
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
            <div class="hero__profile">
                <div class="img__wrapper"> 
                    <img 
                        src="../assets/hero_img_1.jpg" 
                        alt="Stjepan Erdeljac" 
                        v-if="responsive.width >= responsive.md"/>
                    <img 
                        src="../assets/hero_img_2.jpg" 
                        alt="Stjepan Erdeljac"
                        class="img__profile-mobile" 
                        v-if="responsive.width < responsive.md"/>
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

