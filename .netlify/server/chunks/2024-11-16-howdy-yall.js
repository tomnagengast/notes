import { Z as sanitize_props, _ as spread_props } from "./index.js";
import { M as Mdsvex } from "./mdsvex.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const metadata = {
  "title": "Howdy, y'all! 🤠",
  "description": "I guess the first step is finding a place to write all this down",
  "date": "2024-11-16",
  "categories": ["svelte", "notes"],
  "published": true
};
const {
  title,
  description,
  date,
  categories,
  published
} = metadata;
function _024_11_16_howdy_yall_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  Mdsvex($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2 id="markdown">Markdown</h2> <p>Hey friends! 👋</p> ${html(`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#91B4D5">function</span><span style="color:#ADD7FF"> greet</span><span style="color:#A6ACCD">(</span><span style="color:#E4F0FB">name</span><span style="color:#91B4D5">:</span><span style="color:#A6ACCDC0"> string</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#E4F0FB">	console</span><span style="color:#A6ACCD">.</span><span style="color:#E4F0FBD0">log</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">&#96;</span><span style="color:#5DE4C7">Hey </span><span style="color:#A6ACCD">$&#123;</span><span style="color:#E4F0FB">name</span><span style="color:#A6ACCD">&#125;</span><span style="color:#5DE4C7">! 👋</span><span style="color:#A6ACCD">&#96;</span><span style="color:#A6ACCD">)</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`)}`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _024_11_16_howdy_yall_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
