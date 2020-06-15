<template>
    <div class="page-container">

        <div class="navigation" v-if="hide.nav">
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
                    <header class="flex center-content header">
                        <div>
                            <h1>Stjepan Josip Erdeljac</h1>
                            <h3>web designer and developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <button>Learn More</button>
                        </div>
                    </header>
                </div>
            </div>
        </div>

        <div class="office-pic">
            <img src="../img/office-pic.jpg" alt="my office" />
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
                hide: {
                    nav: false,
                }

            };
        },
    };
</script>
