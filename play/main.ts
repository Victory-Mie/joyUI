import {createApp} from "vue";
import App from "./app.vue";
import joyui from "@joy-ui/components"
const app=createApp(App);
app.use(joyui);
app.mount("#app");