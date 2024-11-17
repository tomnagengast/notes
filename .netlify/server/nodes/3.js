import * as universal from '../entries/pages/posts/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/+page.ts";
export const imports = ["_app/immutable/nodes/3.DhVgbvxm.js","_app/immutable/chunks/disclose-version.D8Z72xKr.js","_app/immutable/chunks/runtime.CqlCO1Go.js","_app/immutable/chunks/render.C4uarIbj.js","_app/immutable/chunks/utils.BQutXyYm.js","_app/immutable/chunks/config.CvvL7JPP.js"];
export const stylesheets = [];
export const fonts = [];
