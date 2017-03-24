import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import Home from '../components/Home';
import Foo from '../components/Foo';
import Bar from '../components/Bar';
import NotFound from '../components/NotFound';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact',
            name: 'Cantact',
            component: Hello
        },
        {
            path: '/foo',
            name: 'Foo',
            component: Foo
        },
        {
            path: '/foo/:id',
            name: 'Foos',
            component: Foo
        },
        {
            path: '/bar',
            name: 'Bar',
            component: Bar
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});
