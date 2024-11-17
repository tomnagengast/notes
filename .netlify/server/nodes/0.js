import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Vj4mrtSk.js","_app/immutable/chunks/disclose-version.D8Z72xKr.js","_app/immutable/chunks/runtime.CqlCO1Go.js","_app/immutable/chunks/snippet.DmskIzrS.js","_app/immutable/chunks/legacy.gUrA90ST.js","_app/immutable/chunks/render.C4uarIbj.js","_app/immutable/chunks/lifecycle.DJIj6VCb.js","_app/immutable/chunks/config.CvvL7JPP.js"];
export const stylesheets = ["_app/immutable/assets/0.COKbG57w.css"];
export const fonts = ["_app/immutable/assets/atkinson-hyperlegible-latin-ext-400-normal.Dwzd0TKx.woff2","_app/immutable/assets/atkinson-hyperlegible-latin-ext-400-normal.-EtKVqC7.woff","_app/immutable/assets/atkinson-hyperlegible-latin-400-normal.BKTgBNmI.woff2","_app/immutable/assets/atkinson-hyperlegible-latin-400-normal.DDbeQdWO.woff","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.BEIGL1Tu.woff2","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.CIEtRijs.woff","_app/immutable/assets/jetbrains-mono-greek-400-normal.C190GLew.woff2","_app/immutable/assets/jetbrains-mono-greek-400-normal.CNojz0t3.woff","_app/immutable/assets/jetbrains-mono-vietnamese-400-normal.BeU3T8wf.woff","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.Bc8Ftmh3.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.DHMOLxAi.woff","_app/immutable/assets/jetbrains-mono-latin-400-normal.V6pRDFza.woff2","_app/immutable/assets/jetbrains-mono-latin-400-normal.B11XCQ5g.woff"];
