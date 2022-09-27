import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import router from "./router.js";


import "./assets/main.css";
import "primevue/resources/themes/saga-green/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Menu from "primevue/menu";
import Dialog from 'primevue/dialog';
import Toolbar from 'primevue/toolbar';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-menubar", Menubar);
app.component("pv-card", Card);
app.component("pv-menu", Menu);
app.component("pv-dialog", Dialog);
app.component("pv-toolbar", Toolbar);
app.mount("#app");
