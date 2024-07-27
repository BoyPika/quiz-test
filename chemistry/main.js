import "../src/app.css";
import Chemistry from "./Chemistry.svelte";

const app = new Chemistry({
  target: document.getElementById("app"),
});

export default app;
