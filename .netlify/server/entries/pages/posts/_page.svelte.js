import { Q as push, Y as ensure_array_like, X as head, S as pop } from "../../../chunks/index.js";
import { f as formatDate } from "../../../chunks/utils.js";
import { t as title } from "../../../chunks/config.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.posts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
  });
  $$payload.out += `<section><ul class="posts"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$payload.out += `<li class="post"><a${attr("href", `/posts/${post.slug}`)} class="title">${escape_html(post.title)}</a> <p class="date">${escape_html(formatDate(post.date))}</p> <p class="description">${escape_html(post.description)}</p></li>`;
  }
  $$payload.out += `<!--]--></ul></section>`;
  pop();
}
export {
  _page as default
};
