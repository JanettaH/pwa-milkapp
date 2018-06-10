import { mount } from 'https://redom.js.org/redom.es.js';
import { App } from './app.js';

// Mount app
const app = new App({
  todos: []
});
const mainElem = document.body.getElementsByTagName('main')[0];
mount(mainElem, app);

// TODO: register service worker here
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(
            function(registration) {
                console.log('Success. Scope: ', registration.scope);
            },
            function(err) {
                console.error('Failed. Error: ', err);
            }
        );
    });
}