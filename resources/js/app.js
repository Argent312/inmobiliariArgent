import './bootstrap';
import { createApp } from 'vue'
import introduction from '../components/introduction.vue'
import Alpine from 'alpinejs';


window.app = createApp({
    setup() {
        return {
            message: 'Welcome to Your Vue.js App',
        };
    },
    components: {
        introduction
    },
}).mount('#app');
window.Alpine = Alpine;

Alpine.start();
