import "../../src/app.css";
import Results from "./Results.svelte";

const app = new Results({
  target: document.getElementById("app"),
});

export default app;
