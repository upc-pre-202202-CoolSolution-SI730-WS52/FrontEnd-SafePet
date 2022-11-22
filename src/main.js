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
import Dialog from "primevue/dialog";
import Toolbar from "primevue/toolbar";
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-menubar", Menubar);
app.component("pv-card", Card);
app.component("pv-menu", Menu);
app.component("pv-dialog", Dialog);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-divider", Divider);
app.component("pv-rating", Rating);
app.component("pv-textarea", Textarea);
app.component("pv-calendar", Calendar);
app.component("pv-password", Password);
app.component("pv-dropdown", Dropdown);
app.component("pv-checkbox", Checkbox);
app.mount("#app");
