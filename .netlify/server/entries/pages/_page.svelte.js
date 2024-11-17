import { Q as push, X as head, S as pop } from "../../chunks/index.js";
import { t as title } from "../../chunks/config.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  $$payload.out += `<section>Howdy, y'all! 🤠</section>`;
  pop();
}
export {
  _page as default
};
