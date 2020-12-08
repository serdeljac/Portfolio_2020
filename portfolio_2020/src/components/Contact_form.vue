<template>
    <div class="quick_contact">

        <div class="quick_contact__wrapper">
            <div class="quick_contact__title">
                <h2 class="quick_contact__title-h2">Quick Contact</h2>
                <span class="quick_contact__title-pagenation">Page {{ pageNum }}/4</span>
                <p class="quick_contact__title-review" :class="{active: lastPage }">Review</p>
            </div>
            <form class="quick_contact__form" action="" method="post">

                <div class="page page-1">
                    <div class="form-group">
                        <p>Greetings, my name is </p>
                        <label for="name">YOUR NAME</label>
                        <input id="name" type="text" class="form_name" placeholder="first name" />
                    </div>
                    <div class="form-group">
                        <p>, you can email me at</p>
                        <label for="email">EMAIL</label>
                        <input id="email" type="email" class="form_email">
                    </div>
                </div>

                <div class="page page-2"></div>
                <div class="page page-3"></div>
                <div class="page page-4"></div>

            </form>
            <div class="quick_contact__navigation">
                <div>
                    <button class="btn btn_back">Previous</button>
                </div>
                <div>
                    <button class="btn btn_next">Next Page</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Contact form',
        data() {
            return {
                lastPage: false,
                pageNum: 1
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>