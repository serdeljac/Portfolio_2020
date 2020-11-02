<template>
    <div class="hero">
        <div class="hero__wrapper">
            <div class="hero__header">
                <header>
                    <h1>
                        Hello, I'm <span>Stjepan Erdeljac</span>. <br />A <span>front-end developer and designer</span> from Vancouver.
                    </h1>
                    <h3>
                        I'm a <span>wordpress developer, photographer,</span> and a <span>goal-oriented</span> individual, spending my time at the gym, gardening, and researching inspirational UI trends and styles.
                    </h3>
                </header>
                <div class="call_to_action">
                    <button class="btn view_work clickable">View my work</button>
                    <button class="btn contact_me clickable">Contact me</button>
                </div>
            </div>
        </div>
        <div class="hero__gradient"></div>
    </div>
</template>

<script>
    export default {
        name: "Hero",
        props: ['responsive'],
    }
</script>

