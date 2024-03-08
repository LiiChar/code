import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import components from '@/components/ui';
import directives from '@/directives/';
import stores from '@/stores';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directive => {
    app.directive(directive.name, directive)
});

app
    .use(stores)
    .use(router)
    .mount('#app')
