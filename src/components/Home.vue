<template>
    <div class="column">
        <h3>Navigation</h3>
        <ul id="list">
            <li><a @click="object.age++" >{{ object.age }}</a></li>
            <li><a href="examples/normalScroll.html">Normal scrolling</a></li>
            <li><a href="examples/continuous.html">Continuous vertical</a></li>
            <li><a href="examples/noAnchor.html">Without anchor links (same URL)</a></li>
            <li><a href="examples/navigationV.html">Vertical navigation dots</a></li>
            <li><a href="examples/navigationH.html">Horizontal navigation dots</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted(){
        },
        data() {
            return {
                object: {
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30
                }
            }
        }

    }
</script>