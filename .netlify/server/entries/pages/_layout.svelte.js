import { Q as push, S as pop } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { t as title } from "../../chunks/config.js";
function Header($$payload, $$props) {
  push();
  $$payload.out += `<nav><a href="/"><b>${escape_html(title)}</b></a> <ul class="links"><li><a href="/posts">Posts</a></li></ul></nav>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children, data } = $$props;
  $$payload.out += `<div class="layout">`;
  Header($$payload);
  $$payload.out += `<!----> <main>`;
  children?.($$payload);
  $$payload.out += `<!----></main></div>`;
  pop();
}
export {
  _layout as default
};
