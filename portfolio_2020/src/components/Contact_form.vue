<template>
    <div class="quick_contact">

        <div class="close_quick-contact clickable" @click="triggerContact">X</div>

        <div class="quick_contact__wrapper">

            <div class="quick_contact__title">
                <h2 class="quick_contact__title-h2">Quick Contact</h2>
                <span class="quick_contact__title-pagenation">Page {{ pageNum }}/4</span>
                <p class="quick_contact__title-review" :class="{active: pageNum == 4 }">Review</p>
            </div>

            <form class="quick_contact__form" action="submittion-form.php" method="POST">

                <div class="page page-1">
                    <div class="form-group">
                        <span>Greetings, my name is </span>
                        <input id="name" type="text" class="form_name clickable" v-model="formName"/>
                        <label for="name" class="clickable">YOUR NAME</label>
                    </div>
                    <div class="form-group">
                        <span>you can email me at </span>
                        <input id="email" type="email" class="form_email clickable" v-model="formEmail">
                        <label for="email" class="clickable">EMAIL</label>
                    </div>
                </div>

                <div class="page page-2">
                    <div class="form-group">
                        <span>I'd like to contact you regarding</span>
                    </div>
                    <div class="form-group">
                        <input id="project" type="text" class="form_project clickable" v-model="formProject"/>
                        <label for="project" class="clickable">PROJECT TYPE</label>
                    </div>
                </div>

                <div class="page page-3">
                    <div class="form-group">
                        <span>Your message:</span>
                    </div>
                    <div class="form-group">
                        <input id="msg" type="text" class="form_msg clickable" v-model="formMsg"/>
                        <label for="msg" class="clickable">hello, stjepan...</label>
                    </div>
                </div>

                <div class="page page-4">
                    <p><span>To:</span> hi@stjepanerdeljac.com</p>
                    <p><span>From:</span> {{ formEmail }}</p>
                    <p><span>Subject:</span> {{ formName }} is contacting you regarding {{ formProject }}</p>
                    <p><span>Message:</span></p>
                    <p>{{ formMsg }}</p>
                </div>

                <div class="quick_contact__navigation">
                    <div>
                        <button type="button" class="btn btn_back" v-on:click="pageChange(-1)" v-show="pageNum > 1">Previous</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn_next clickable"  v-if="pageNum < 4" v-on:click="pageChange(1)">Next Page</button>
                        <button type="submit" v-show="pageNum == 4" class="btn btn_next clickable">Submit</button>
                    </div>
                </div>

            </form>


        </div>

    </div>
</template>

<script>
    import $ from 'jquery';
    import gsap from 'gsap';

    const openTl = gsap.timeline({});
    

    export default {
        name: 'ContactForm',
        data() {
            return {
                pageNum: 1,
                formName: '',
                formEmail: '',
                formProject: '',
                formMsg: ''
                
            }
        },
        methods: {
            pageChange: function(num) {
                const checkEmail = document.querySelector('.form_email');

                if (this.pageNum === 1) {

                    if (this.formName.length == 0) {
                        $('.form_name').addClass('invalid');
                    } else {
                        $('.form_name').removeClass('invalid');
                    }

                    if (!checkEmail.validity.valid || this.formEmail.length == 0) {
                        $('.form_email').addClass('invalid');
                    } else {
                        $('.form_email').removeClass('invalid');
                        this.pageNum = this.pageNum + num
                    }

                } else if (this.pageNum === 2) {

                    if (this.formProject.length == 0) {
                        $('.form_project').addClass('invalid');
                    } else {
                        $('.form_project').removeClass('invalid');
                        this.pageNum = this.pageNum + num
                    }

                } else if (this.pageNum === 3) {

                    if (this.formMsg.length == 0) {
                        $('.form_msg').addClass('invalid');
                    } else {
                        $('.form_msg').removeClass('invalid');
                        this.pageNum = this.pageNum + num
                    }

                } else {
                    this.pageNum = this.pageNum + num
                }
                
            },
            triggerContact: function() {
                const closeTl = gsap.timeline({onComplete: this.trigClose});
                closeTl.to('.quick_contact', {duration: 0.5, opacity: 0, filter: 'blur(100px)', ease: "ease-out"});
            },
            trigClose: function() {
                this.$emit('triggerContact');
            }
        },
        mounted() {

            openTl.to('.quick_contact', {duration: 0.5, opacity: 1, filter: 'blur(0px)', ease: "ease-out"})
                  .to('.close_quick-contact', {duration: 0.8, opacity: 1, ease: "ease-out"})

            if (this.pageNum == 1) {
                $('.page-' + this.pageNum).css('transform', 'translateX(0vw)');
            }

            $('.clickable').hover(
                function() {
                $('.cursor').addClass('active');
                },
                function() {
                $('.cursor').removeClass('active');
                }
            );
            
        },
        updated() {

            if (this.formName.length > 0) {
                $('.form_name + label').addClass('pg1-filled');
                $('.form_name').removeClass('invalid');
            } else {
                $('.form_name + label').removeClass('pg1-filled');
            }

            if (this.formEmail.length > 0) {
                $('.form_email + label').addClass('pg1-filled');
                $('.form_email').removeClass('invalid');
            } else {
                $('.form_email + label').removeClass('pg1-filled');
            }

            if (this.formProject.length > 0) {
                $('.form_project + label').addClass('pg2-filled');
                 $('.form_project').removeClass('invalid');
            } else {
                $('.form_project + label').removeClass('pg2-filled');
            }

            if (this.formMsg.length > 0) {
                $('.form_msg + label').addClass('pg2-filled');
            } else {
                $('.form_msg + label').removeClass('pg2-filled');
            }

            if (this.pageNum) {
                $('.page-' + (this.pageNum - 1)).css('transform', 'translateX(-200vw)');
                $('.page-' + this.pageNum).css('transform', 'translateX(0vw)');
                $('.page-' + (this.pageNum + 1)).removeAttr('style');
            } 
        },
    }
</script>