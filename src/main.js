import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import "@/assets/css/nucleo-icons.css";
import "@/assets/css/nucleo-svg.css";
import "@/assets/css/soft-ui-dashboard.css";
import "@/assets/css/soft-ui-dashboard.min.css";
const app = createApp(App);

registerPlugins(app);

app.mount("#app");
