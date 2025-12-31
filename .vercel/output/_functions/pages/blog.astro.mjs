import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, e as renderSlot } from '../chunks/astro/server_CVvs-ccK.mjs';
import 'piccolore';
import { $ as $$Image } from '../chunks/_astro_assets_BoTnLj1_.mjs';
import { g as getCollection } from '../chunks/_astro_content_B9aGIoVt.mjs';
import { $ as $$Layout, S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/Layout_Jpuu00lL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$HeroBlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroBlogCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group flex flex-col focus:outline-none border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"${addAttribute(`/post/${post.data.slug}`, "href")}> <div class="relative overflow-hidden pt-[50%] sm:pt-[70%]"> ${post.data.coverImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105", "src": post.data.coverImage, "alt": post.data.title || "Blog Image", "width": 700, "height": 500 })}`} <!-- <span
      class="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white"
    >
      Sponsored
    </span> --> </div> <div class="mt-2 p-4"> <h2 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 mb-5"> ${post.data.title} </h2> <p class="mt-3 text-gray-800"> ${post.data.description} </p> <p class="text-start mt-5 inline-flex items-center gap-x-1 text-sm font-medium text-indigo-600 decoration-2 group-hover:underline group-focus:underline">
Leer post
<svg class="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </p> </div> </a>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/blog/HeroBlogCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { posts } = Astro2.props;
  return renderTemplate`<!-- Card Blog -->${maybeRenderHead()}<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <!-- Grid --> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Hero Card --> ${posts.map((post) => renderTemplate`${renderComponent($$result, "HeroBlogCard", $$HeroBlogCard, { "post": post })}`)} <!-- End Hero Card --> </div> <!-- End Grid --> </div> <!-- End Card Blog -->`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/home/Hero.astro", void 0);

const $$BlogHero = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const featuredForHero = allPosts.filter((post) => post.data.featured).sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()).slice(0, 2);
  const heroPostIds = new Set(featuredForHero.map((p) => p.id));
  const remainingPosts = allPosts.filter((post) => !heroPostIds.has(post.id)).sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
  const postsPerPage = 3;
  Math.ceil(remainingPosts.length / postsPerPage);
  return renderTemplate`${maybeRenderHead()}<div class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative px-10"> <div class="w-full text-center py-10 flex flex-col justify-center items-center space-y-6"> <h1 class="text-3xl font-bold lg:text-5xl">
Tu negocio puede vender más! <br> Aquí te explicamos cómo (sin código).
</h1> <!-- <div class="flex flex-col-reverse md:flex-row items-center gap-4 max-w-xl">
      <Image
        width={1000}
        height={1000}
        src={Sealy}
        class="w-auto h-75 aspect-auto"
        alt="Blog_Hero_Image"
      />
      <p class="lg:text-xl text-start text-gray-600">
        Nuestra foca te guía con consejos simples para que tu página web trabaje
        por ti.
      </p>
    </div> --> <!-- <h2 class="text-xl font-bold lg:text-2xl">Nuestros artículos</h2> --> ${renderComponent($$result, "Hero", $$Hero, { "posts": allPosts })} </div> </div>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/blog/Blog-Hero.astro", void 0);

const $$Astro = createAstro();
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const allPosts = await getCollection("posts");
  allPosts.filter((post) => post.data.featured).sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
  const { title, ...seoProps } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, ...seoProps }, { "default": async ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/layouts/BlogLayout.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "/og-blog.webp" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHero", $$BlogHero, {})} ` })}`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Andres/Documents/Desarrollo/sealy/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
