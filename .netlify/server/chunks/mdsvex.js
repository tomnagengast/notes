import { Q as push, S as pop } from "./index.js";
function Mdsvex($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  props.children?.($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  Mdsvex as M
};
