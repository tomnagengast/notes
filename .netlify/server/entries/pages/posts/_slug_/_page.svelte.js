import { Q as push, Y as ensure_array_like, X as head, S as pop } from "../../../../chunks/index.js";
import { f as formatDate } from "../../../../chunks/utils.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.meta.categories);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.meta.title)}</title>`;
    $$payload2.out += `<meta property="og:type" content="article"> <meta property="og:title"${attr("content", data.meta.title)}>`;
  });
  $$payload.out += `<article><hgroup><h1>${escape_html(data.meta.title)}</h1> <p>Published at ${escape_html(formatDate(data.meta.date))}</p></hgroup> <div class="tags"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<span class="surface-4">#${escape_html(category)}</span>`;
  }
  $$payload.out += `<!--]--></div> <div class="prose"><!---->`;
  data.content($$payload, {});
  $$payload.out += `<!----></div></article>`;
  pop();
}
export {
  _page as default
};
