import { Z as sanitize_props, _ as spread_props } from "./index.js";
import { M as Mdsvex } from "./mdsvex.js";
import { e as escape_html } from "./escaping.js";
import { a as attr } from "./attributes.js";
function Img($$payload, $$props) {
  let { src, alt } = $$props;
  $$payload.out += `<img${attr("src", src)}${attr("alt", alt)} loading="lazy">`;
}
function Counter($$payload) {
  let count = 0;
  $$payload.out += `<button>${escape_html(count)}</button>`;
}
const metadata = {
  "title": "Getting Started With Nix On MacOS",
  "description": "Nix seems hard but really it's not that bad",
  "date": "2024-12-01",
  "categories": ["nix"],
  "published": true
};
const {
  title,
  description,
  date,
  categories,
  published
} = metadata;
function _024_12_01_getting_started_with_nix_on_macos_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  Mdsvex($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h2 id="svelte">Svelte</h2> <p>Media inside the <strong>static</strong> folder is served from <code>/</code>.</p> <p>`;
        Img($$payload2, { src: "favicon.png", alt: "Svelte" });
        $$payload2.out += `<!----></p> <h2 id="counter">Counter</h2> `;
        Counter($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _024_12_01_getting_started_with_nix_on_macos_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
