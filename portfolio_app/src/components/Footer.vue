<template>
   <footer class="footer">
       <hr class="footer__border"/>
       <p class="footer__copyright">&copy; Designed and developed by Stjepan Erdeljac. Circa 2020</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style lang="scss" scoped>
    .footer {
        width: 100vw;
        background: #000;
        padding-bottom: 20px;
        &__border {
            width: 75%;
            border: 1px solid rgba(255,255,255,.9);
            margin: 0 auto 20px;
        }
        &__copyright {
            color: #fff;
            text-align: center;
            font-size: 1.3rem;
        }
    }
</style>