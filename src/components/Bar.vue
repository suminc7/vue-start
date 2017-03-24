<template>
    <div>
        Bar
        <ul id="repeat-object" class="demo">
            <li v-for="value in object">
                {{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
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