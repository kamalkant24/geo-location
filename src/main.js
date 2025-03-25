import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { loadGoogleMapsAPI } from "./utils/googleMaps";  // ✅ Import Google Maps Loader

const app = createApp(App);
app.use(router);
app.mount("#app");

loadGoogleMapsAPI()
    .then(() => console.log("✅ Google Maps is ready to use!"))
    .catch((err) => console.error("❌ Google Maps failed to load:", err));
