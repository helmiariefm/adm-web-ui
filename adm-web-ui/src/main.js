import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faHome, faUsers, faStoreAlt, faCog, faUser, faBell, faSave, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

library.add(faChevronLeft, faHome, faUsers, faStoreAlt, faCog, faUser, faBell, faSave, faSearch);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
