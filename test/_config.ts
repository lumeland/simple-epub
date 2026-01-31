import lume from "lume/mod.ts";
import theme from "theme/mod.ts";

const site = lume({
  prettyUrls: false,
  server: {
    root: "epub",
  },
}, {
  markdown: {
    options: { xhtmlOut: true },
  },
});

site.use(theme());

export default site;
