import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import the router
// Import FontAwesome core and components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faPencil);

const app = createApp(App);

// Register FontAwesomeIcon as a global component
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router); // Use the router
app.mount('#app');
