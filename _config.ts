import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  src: "./src",
  prettyUrls: false,
  server: {
    root: "epub",
  },
});

site.use(plugins());

export default site;
