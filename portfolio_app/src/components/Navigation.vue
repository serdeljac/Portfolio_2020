<template>
    <div class="navigation">
        <nav>
            <ul>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Home</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Work</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">About</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style lang="scss" scoped>
    .navigation {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: #fff;
    }
</style>