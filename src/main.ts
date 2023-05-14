import "normalize.css";
import "@/styles/reset.less";
import { createApp } from "vue";
import Resume from "@/pages/resume";

createApp(Resume).mount(document.getElementById("app") as HTMLDivElement);
