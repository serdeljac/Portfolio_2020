<template>
    <div class="page-container">

        <div class="navigation" v-if="hideNavigation">
            <nav>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">work</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </div>

        <div class="hero">
            <div class="grid grid-column-2">
                <div class="portfolio">
                    <!-- Place portfolio image: black and white, svg, animated -->
                </div>
                <div>
                    <header class="grid grid-row-4 header">
                        <div><h1>Stjepan Josip Erdeljac</h1></div>
                        <div><h3>web designer and developer</h3></div>
                        <div><p>small sentence about my work ethic</p></div>
                        <div><button>Learn More --></button></div>
                    </header>
                </div>
            </div>
        </div>

        <main>
            <section class="introduction">

            </section>
        </main>

        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hideNavigation: false,
            };
        },
    };
</script>
