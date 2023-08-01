import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faChevronLeft,
    faChevronRight,
    faHome, 
    faUsers, 
    faStoreAlt, 
    faCog, 
    faUser, 
    faBell, 
    faSave, 
    faSearch,
    faUpload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

library.add(
    faChevronLeft,
    faChevronRight,
    faHome, 
    faUsers, 
    faStoreAlt, 
    faCog, 
    faUser, 
    faBell, 
    faSave, 
    faSearch,
    faUpload
);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia);
app.mount('#app');
