<template>
    <div class="error">
        <div class="error__wrapper">
            <div class="title">
                <h2>Cannot find page</h2>
                <h3>Error: 404</h3>
            </div>
            <div class="content">
                <p>
                    Something went wrong for the following reasons:
                </p>
                <ol>
                    <li>A link that was clicked cannot find the correct component</li>
                    <li>An invalid url was entered</li>
                </ol>
                <hr />
                <p class="return">
                    <a href="/" class="clickable">Click here</a> to return to site
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    
    export default {
        name: 'NotFound',
         mounted() {
            $('.cursor').removeClass('active');
            $('.clickable').hover(
                function() {
                    $('.cursor').addClass('active');
                },
                function() {
                    $('.cursor').removeClass('active');
                }
                );
        }
    }
</script>