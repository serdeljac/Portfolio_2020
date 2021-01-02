<template>
    <div class="hero">

        <div class="hero__header">
            <div>
                <header>
                    <h1 class="hero__header-h1">
                        Hello, I'm <span>Stjepan Erdeljac</span>. <br />A <span>web developer </span> from Vancouver.
                    </h1>
                    <h3 class="hero__header-h3">
                        I'm a <span>web developer, photographer,</span> and a <span>goal-oriented</span> individual, spending my time at the gym, gardening, and researching inspirational UI trends and styles.
                    </h3>
                </header>
                <div class="call_to_action">
                    <a href="#web"><button class="btn view_work clickable">View my work</button></a>
                    <button @click="triggerContact" class="btn contact_me clickable">Contact me</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>



    export default {
        name: "Hero",
    }
</script>

<style lang="scss" scoped>

</style>