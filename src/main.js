import { createApp, reactive } from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

import 'nprogress/nprogress.css';

const GStore = reactive({ flashMessage: '' });

createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app');
