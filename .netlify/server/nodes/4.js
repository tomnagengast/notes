import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/4.bx8GzgQK.js","_app/immutable/chunks/preload-helper.DqzVVJmZ.js","_app/immutable/chunks/runtime.CqlCO1Go.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/disclose-version.D8Z72xKr.js","_app/immutable/chunks/render.C4uarIbj.js","_app/immutable/chunks/utils.BQutXyYm.js"];
export const stylesheets = [];
export const fonts = [];
