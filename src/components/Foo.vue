<template>
    <div>
        Foo {{ $route.params.id }}
        <ul id="example-1">
            <li v-for="item in items">
                {{ item.message }}
            </li>
        </ul>
    </div>
</template>

<script lang="babel">
    export default {
        name: 'app',
        data() {
            return {
                items: [
                    { message: 'Foo' },
                    { message: 'Bar' }
                ]
            }
        }
    }
</script>