import { e as error } from "../../../../chunks/index2.js";
async function load({ params }) {
  try {
    const posts = /* @__PURE__ */ Object.assign({ "../../../posts/2024-11-16-howdy-yall.md": () => import("../../../../chunks/2024-11-16-howdy-yall.js").then((n) => n._), "../../../posts/2024-12-01-getting-started-with-nix-on-macos.md": () => import("../../../../chunks/2024-12-01-getting-started-with-nix-on-macos.js").then((n) => n._) });
    const matchingPost = Object.keys(posts).find((post2) => post2.endsWith(`${params.slug}.md`));
    if (!matchingPost) throw new Error(`Could not find ${params.slug}`);
    const post = await posts[matchingPost]();
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
export {
  load
};
