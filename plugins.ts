import lightningcss from "lume/plugins/lightningcss.ts";
import { merge } from "lume/core/utils/object.ts";
import epub, { type Options as EpubOptions } from "lume/plugins/epub.ts";
import nav from "lume/plugins/nav.ts";
import extractOrder from "lume/plugins/extract_order.ts";
import footnotes from "https://cdn.jsdelivr.net/gh/lumeland/markdown-plugins@0.11.1/footnotes.ts";

import "lume/types.ts";

export interface Options {
  epub?: Partial<EpubOptions>;
}

export const defaults: Options = {
  epub: {
    outputPages: true,
    metadata: {
      title: "Title of the book",
      cover: "/img/cover.jpg",
    },
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(lightningcss())
      .use(nav())
      .use(extractOrder())
      .use(footnotes({
        referenceAttrs: {
          "epub:type": "noteref",
        },
      }))
      .use(epub(options.epub))
      .add("/");
  };
}
