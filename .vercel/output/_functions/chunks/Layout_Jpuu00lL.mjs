import { c as createComponent, m as maybeRenderHead, d as renderTemplate, a as createAstro, j as renderHead, k as defineScriptVars, b as addAttribute, r as renderComponent, e as renderSlot } from './astro/server_CVvs-ccK.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-8"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="mb-4 md:mb-0">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Sealy. Todos los derechos reservados.
</p> <div class="flex space-x-4"> <a href="/privacy" class="hover:underline">Política de Privacidad</a> <a href="/terms" class="hover:underline">Términos de Servicio</a> <a href="/#contact" class="hover:underline">Contacto</a> </div> </div> </div> </footer>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header data-astro-cid-5blmo7yk> <nav class="fixed top-0 z-99 w-full flex justify-center transition-all duration-400" id="navbar" data-astro-cid-5blmo7yk> <ul class="flex flex-row w-full justify-center items-center px-5 md:px-10 py-2 font-semibold text-md" data-astro-cid-5blmo7yk> <div class="flex flex-row flex-none gap-4 md:gap-8" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/#proceso" data-astro-cid-5blmo7yk>proceso</a></li> <li data-astro-cid-5blmo7yk><a href="/#preguntas_frecuentes" data-astro-cid-5blmo7yk>FQA</a></li> </div> <li class="font-extrabold text-3xl flex-1 text-center" data-astro-cid-5blmo7yk> <a href="/#" data-astro-cid-5blmo7yk>SC</a> </li> <div class="flex flex-row flex-none gap-4 md:gap-8" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/#contacto" data-astro-cid-5blmo7yk>contacto</a></li> <li data-astro-cid-5blmo7yk><a href="/blog" data-astro-cid-5blmo7yk>blog</a></li> </div> </ul> </nav> </header> <script>\n  window.addEventListener("DOMContentLoaded", () => {\n    const header = document.getElementById("navbar");\n    const trigger = document.getElementById("scroll-trigger");\n\n    if (!header || !trigger) return;\n\n    const observer = new IntersectionObserver(\n      ([entry]) => {\n        header.classList.toggle("scrolled", !entry.isIntersecting);\n      },\n      {\n        rootMargin: "-95% 0px 0px 0px",\n      }\n    );\n\n    observer.observe(trigger);\n  });\n<\/script> '])), maybeRenderHead());
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/Navbar.astro", void 0);

const SITE_NAME = "SealCode";
const SITE_TITLE = "SealCode - Creación de sitios web";
const SITE_DESCRIPTION = "Diseñamos páginas web claras, rápidas y enfocadas en generar clientes, sin complicaciones técnicas ni lenguaje raro.";
const SITE_URL = "https://seal-code.vercel.app/";
const SITE_LANGUAGE = "es";
const GA_MEASUREMENT_ID = "G-NK4HXVRRXG";
const META_TITLE_TEMPLATE = "%s | SealCode mx";
const META_DESCRIPTION = SITE_DESCRIPTION;
const META_AUTHOR = "Andrés Torres";
const META_KEYWORDS = [
  "emprendimiento",
  "web",
  "mexico",
  "vender",
  "blog"
];
const OG_TYPE = "website";
const OG_IMAGE = "/og-image.png";
const OG_IMAGE_ALT = "SealCode - Creación de sitios web";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const TWITTER_CARD = "summary_large_image";
const TWITTER_SITE = "@sealcode";
const TWITTER_CREATOR = "@sealcode";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const {
    title,
    description = META_DESCRIPTION,
    image,
    imageAlt = OG_IMAGE_ALT,
    type = OG_TYPE,
    publishedTime,
    modifiedTime,
    author = META_AUTHOR,
    tags,
    noindex = false
  } = Astro2.props;
  const fullTitle = META_TITLE_TEMPLATE.replace("%s", title);
  const ogImage = image ? image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}` : `${SITE_URL}${OG_IMAGE}`;
  const canonicalURL = new URL(Astro2.url.pathname, SITE_URL);
  return renderTemplate(_a || (_a = __template(['<head><!-- Basic Meta --><meta charset="UTF-8"><!-- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> --><meta name="viewport" content="width=device-width"><meta name="generator"', '><link rel="icon" type="image/x-icon" href="/favicon.ico"><!-- SEO Meta --><title>', '</title><meta name="description"', '><meta name="author"', ">", '<link rel="canonical"', ">", '<!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:image:width"', '><meta property="og:image:height"', '><meta property="og:site_name"', '><meta property="og:locale"', "><!-- Article specific OG tags -->", "", "", "", '<!-- Twitter Card --><meta name="twitter:card"', '><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', ">", "", '<!-- Google Analytics (gtag) with Partytown --><script type="text/partytown"', '><\/script><script type="text/partytown">(function(){', '\n    window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag("js", new Date());\n    gtag("config", GA_MEASUREMENT_ID);\n  })();<\/script>', "</head>"])), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(description, "content"), addAttribute(author, "content"), META_KEYWORDS.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(META_KEYWORDS.join(", "), "content")}>`, addAttribute(canonicalURL, "href"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(imageAlt, "content"), addAttribute(String(OG_IMAGE_WIDTH), "content"), addAttribute(String(OG_IMAGE_HEIGHT), "content"), addAttribute(SITE_NAME, "content"), addAttribute(SITE_LANGUAGE, "content"), type === "article" && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, type === "article" && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`, type === "article" && author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, type === "article" && tags && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), addAttribute(TWITTER_CARD, "content"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(imageAlt, "content"), renderTemplate`<meta name="twitter:site"${addAttribute(TWITTER_SITE, "content")}>`, renderTemplate`<meta name="twitter:creator"${addAttribute(TWITTER_CREATOR, "content")}>`, addAttribute(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, "src"), defineScriptVars({ GA_MEASUREMENT_ID }), renderHead());
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/ui/Head.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, ...seoProps } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Head", $$Head, { "title": title, ...seoProps, "data-astro-cid-sckkx6r4": true })}<!-- <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml/webp" href="/foca.webp" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />
    <Seo
      title="SealCode - Creación de sitios web"
      description="Diseñamos páginas web claras, rápidas y enfocadas en generar clientes, sin complicaciones técnicas ni lenguaje raro."
      image="ogImage.png"
      url="http://localhost:4321"
    />
    <title>Astro Basics</title>
  </head> -->${maybeRenderHead()}<body class="text-primary" id="scroll-trigger" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/layouts/Layout.astro", void 0);

export { $$Layout as $, SITE_DESCRIPTION as S, SITE_TITLE as a };
