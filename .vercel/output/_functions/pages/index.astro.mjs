import { c as createComponent, m as maybeRenderHead, d as renderTemplate, r as renderComponent, f as renderScript } from '../chunks/astro/server_CVvs-ccK.mjs';
import 'piccolore';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_BoTnLj1_.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_Jpuu00lL.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const problemas = [
    {
      content: "Vendes por Instagram o WhatsApp, pero no se ve profesional"
    },
    {
      content: "La gente pregunta y no compra"
    },
    {
      content: "Te cuesta explicar lo que haces"
    },
    {
      content: "Sientes que tu negocio podr\xEDa vender m\xE1s"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative"> <div class="flex flex-col w-full max-w-6xl items-center px-8"> <!-- contenido --> <div class="text-start space-y-4 text-xl"> <h2 class="text-5xl font-bold text-center mb-5">
¿Te pasa alguna de estas?
</h2> <ul class="space-y-10 w-fit mx-auto"> ${problemas.map((problema) => renderTemplate`<li class="flex flex-row items-center justify-start mt-10 gap-4"> <span class="inline-block w-3 h-3 rounded-full bg-highlight flex-none"></span> <div> <p class=" font-normal text-xl">${problema.content}</p> </div> </li>`)} </ul> <h3 class="text-4xl font-bold text-center my-10">No es tu culpa</h3> <p class="max-w-2xl mx-auto text-center text-2xl">
La mayoría de los pequeños negocios en México tienen este problema.
</p> </div> </div> </div>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/AboutUs.astro", void 0);

const sealy = new Proxy({"src":"/_astro/Sealy.Dm1KRwld.webp","width":2938,"height":2463,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andres/Documents/Desarrollo/sealy/src/assets/Sealy.webp";
							}
							
							return target[name];
						}
					});

const $$FinalCTA = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="contacto" class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative"> <!-- <div class="flex flex-col w-full max-w-6xl items-center px-8"> --> <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl items-center px-8 gap-4"> <!-- contenido --> <div class="text-start space-y-4 text-xl"> <h2 class="text-5xl font-bold text-center mb-5">
¿Listo para Ponerle el Sello de Éxito a tu Negocio?
</h2> <div class="h-0.5 w-64 mx-auto bg-highlight"></div> <p class="text-xl max-w-2xl mx-auto mt-10">
Una buena página web puede marcar la diferencia entre que te comparen o
<span class="border-b-2">te elijan</span>.
</p> ${renderComponent($$result, "Image", $$Image, { "src": sealy, "alt": "Sealy Logo", "class": "w-64 md:w-96 block md:h-fit mx-auto flex-none aspect-auto mt-6" })} </div> <form id="contact" class="flex flex-col gap-4 h-full w-full max-w-4xl items-center bg-linear-45 from-[#006591] to-highlight p-6 rounded-lg font-semibold"> <div class="flex flex-col w-full items-start"> <label for="nombre" class="ml-4 text-white mb-1">Nombre</label> <input type="text" name="nombre" id="nombre" placeholder="" class="border border-gray-300 backdrop-blur-2xl bg-[#e8f0fe]/80 rounded-full px-4 py-2 w-full"> </div> <div class="flex flex-col w-full items-start"> <label for="email" class="ml-4 text-white mb-1">Correo de contacto</label> <input type="email" name="email" id="email" placeholder="" class="border border-gray-300 backdrop-blur-2xl bg-[#e8f0fe]/80 rounded-full px-4 py-2 w-full"> </div> <div class="flex flex-col w-full items-start"> <label for="telefono" class="ml-4 text-white mb-1">Whatsapp</label> <input type="text" name="telefono" id="telefono" placeholder="" class="border border-gray-300 backdrop-blur-2xl bg-[#e8f0fe]/80 rounded-full px-4 py-2 w-full"> </div> <div class="flex flex-col w-full items-start"> <label for="comentarios" class="ml-4 text-white mb-1">Cuéntanos sobre tu idea</label> <textarea name="comentarios" id="comentarios" rows="8" class="border border-gray-300 backdrop-blur-2xl bg-[#e8f0fe]/80 rounded-2xl px-4 py-2 w-full mr-4"></textarea> </div> <button type="submit" class="bg-primary w-full py-2 text-white font-bold px-4 rounded hover:bg-highlight-dark transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-xl">
Enviar
</button> </form> </div> </div> ${renderScript($$result, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/FinalCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/FinalCTA.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="preguntas_frecuentes" class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative" data-astro-cid-hkoc4sea> <div class="flex flex-col w-full max-w-6xl items-center px-8" data-astro-cid-hkoc4sea> <!-- contenido --> <div class="text-start space-y-4 text-xl" data-astro-cid-hkoc4sea> <h2 class="text-5xl font-bold text-center mb-5" data-astro-cid-hkoc4sea>Preguntas Frecuentes</h2> <div class="h-0.5 w-64 mx-auto bg-highlight" data-astro-cid-hkoc4sea></div> <ul class="accordion bg-gray-100 rounded-lg shadow-xl shadow-gray-100 p-0 w-full" data-astro-cid-hkoc4sea> <!-- Duplicate this <li> as often as you want --> <li class="cursor-pointer my-1 border-b-[1.5px] border-highlight" data-astro-cid-hkoc4sea> <span class="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center" data-astro-cid-hkoc4sea> <p class="p-2" data-astro-cid-hkoc4sea>\xBFEs muy caro?</p> <svg class="text-highlight mr-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16" data-astro-cid-hkoc4sea> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" data-astro-cid-hkoc4sea></path> </svg> </span> <div class="bg-white text-md p-2" data-astro-cid-hkoc4sea>\nHay opciones seg\xFAn tu etapa y necesidades.\n</div> </li> <li class="cursor-pointer my-1 border-b-[1.5px] border-highlight" data-astro-cid-hkoc4sea> <span class="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center" data-astro-cid-hkoc4sea> <p class="p-2" data-astro-cid-hkoc4sea>\xBFNecesito saber programaci\xF3n?</p> <svg class="text-highlight mr-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16" data-astro-cid-hkoc4sea> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" data-astro-cid-hkoc4sea></path> </svg> </span> <div class="bg-white text-md p-2" data-astro-cid-hkoc4sea>\nNo. T\xFA te enfocas en tu negocio y nosotros en el resto.\n</div> </li> <li class="cursor-pointer my-1 border-b-[1.5px] border-highlight" data-astro-cid-hkoc4sea> <span class="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center" data-astro-cid-hkoc4sea> <p class="p-2" data-astro-cid-hkoc4sea>\xBFCu\xE1nto tiempo tarda?</p> <svg class="text-highlight mr-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16" data-astro-cid-hkoc4sea> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" data-astro-cid-hkoc4sea></path> </svg> </span> <div class="bg-white text-md p-2" data-astro-cid-hkoc4sea>\nEn pocos d\xEDas puedes tener tu p\xE1gina lista.\n</div> </li> </ul> </div> </div> </div>  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"><\/script> <script>\n  $(document).on("click", ".accordion li", function (e) {\n    $(this).find("div").slideToggle();\n    $(this).find("svg").toggleClass("flipY");\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/Pricing.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const processSteps = [
    {
      title: "Platicamos",
      description: "Conocemos tu negocio y lo que necesitas."
    },
    {
      title: "Dise\xF1amos",
      description: "Creamos una propuesta clara y atractiva."
    },
    {
      title: "Desarrollamos",
      description: "Construimos tu web optimizada y funcional."
    },
    {
      title: "Publicamos",
      description: "La lanzamos y te explicamos c\xF3mo usarla."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="proceso" class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative"> <div class="flex flex-col w-full max-w-6xl items-center px-8"> <!-- contenido --> <div class="text-start space-y-4 text-xl"> <h2 class="text-5xl font-bold text-center mb-5">
Así de fácil es trabajar con SealCode
</h2> <div class="h-0.5 w-64 mx-auto bg-highlight"></div> <ul class="mt-10 space-y-10 w-fit mx-auto"> ${processSteps.map((step, index) => renderTemplate`<li class="flex flex-row items-center justify-start gap-4"> <span class="inline-block text-highlight font-bold mt-0 flex-none text-4xl"> ${index + 1}.
</span> <div> <h4 class="font-semibold ">${step.title}</h4> <p class=" font-normal text-lg">${step.description}</p> </div> </li>`)} </ul> <p class="text-center mt-10">
Sin tecnicismos. <span class="border-b-2">Sin complicaciones</span>.
</p> </div> </div> </div>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/Process.astro", void 0);

const Approved = new Proxy({"src":"/_astro/approved.Bq5EJmWK.webp","width":1075,"height":1076,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andres/Documents/Desarrollo/sealy/src/assets/approved.webp";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const problemas = [
    {
      content: "Explican claramente tu servicio"
    },
    {
      content: "Generan confianza desde el primer vistazo"
    },
    {
      content: "Funcionan perfecto en celular"
    },
    {
      content: "Ayudan a que m\xE1s personas te contacten"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative"> <div class="flex flex-col w-full max-w-6xl items-center px-8"> <!-- contenido --> <div class="text-start space-y-4 text-xl"> <h2 class="text-5xl font-bold text-center mb-5">
La solución: una página web hecha para vender
</h2> <div class="h-0.5 w-64 mx-auto bg-highlight"></div> <p class="text-center text-3xl my-5">
En <b>SealCode</b> creamos páginas web que:
</p> <ul class="space-y-10 w-fit mx-auto mt-5"> ${problemas.map((problema) => renderTemplate`<li class="flex flex-row items-center justify-start  gap-4"> <span class="inline-block w-3 h-3 rounded-full bg-highlight flex-none"></span> <div> <p class=" font-normal text-xl">${problema.content}</p> </div> </li>`)} </ul> <p class="max-w-2xl mx-auto text-center text-2xl mt-10">
No necesitas saber programación. Nosotros nos encargamos de todo.
</p> </div> <div class="flex flex-row mx-auto w-fit md:max-w-6xl items-center gap-4 mt-10"> ${renderComponent($$result, "Image", $$Image, { "width": 500, "height": 500, "src": Approved, "alt": "Approved", "class": "w-20 h-20 aspect-auto" })} <div class="flex flex-col space-y-0 text-start"> <p class="text-2xl font-bold -mb-2">SealCode</p> <p class="text-xl">Approved</p> </div> </div> </div> </div>`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/Services.astro", void 0);

const Sealy = new Proxy({"src":"/_astro/foca.DwG_eBMm.webp","width":1024,"height":1536,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andres/Documents/Desarrollo/sealy/src/assets/foca.webp";
							}
							
							return target[name];
						}
					});

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <div
  class="min-h-[60vh] w-full flex flex-col justify-center items-center text-center overflow-hidden relative"
> -->${maybeRenderHead()}<div class="h-auto pb-30 w-full flex flex-col justify-start pt-20 items-center text-center bg-white overflow-hidden relative" data-astro-cid-mmc7otgs> <!-- <div
    class="bg-gradient-to-r from-[#f9bd71] via-[#f793ab] to-[#f782ed] absolute inset-0 h-32 blur-xl -mt-10"
  >
  </div> --> <div class="gradient w-full absolute inset-0" data-astro-cid-mmc7otgs></div> <div class="relative z-10 flex flex-col-reverse md:flex-row w-full max-w-6xl justify-between items-center px-8" data-astro-cid-mmc7otgs> <!-- contenido --> <div class="text-start space-y-4" data-astro-cid-mmc7otgs> <span class="text-7xl font-bold text-start" data-astro-cid-mmc7otgs>SEAL<br data-astro-cid-mmc7otgs>CODE</span> <h1 class="text-3xl font-bold" data-astro-cid-mmc7otgs>
Páginas web profesionales para pequeños negocios en México que quieren
        vender más
</h1> <p class="max-w-md text-lg" data-astro-cid-mmc7otgs>
Diseñamos páginas web claras, rápidas y enfocadas en generar clientes,
        sin complicaciones técnicas ni lenguaje raro.
</p> <div class="flex flex-row max-w-md gap-4 font-semibold" data-astro-cid-mmc7otgs> <button class="bg-highlight text-white px-4 py-2 rounded-lg hover:scale-105 hover:cursor-pointer transition-all duration-200" data-astro-cid-mmc7otgs>Quiero mi página web!</button> <a href="/#proceso" class="bg-transparent border-2 border-primary hover:bg-primary hover:text-white hover:scale-105 hover:cursor-pointer transition-all duration-200 px-4 py-2 rounded-lg" data-astro-cid-mmc7otgs>¿Cómo funciona?</a> </div> </div> ${renderComponent($$result, "Image", $$Image, { "width": 500, "height": 500, "src": Sealy, "alt": "sealy", "class": "w-[32vw] h-auto aspect-auto", "data-astro-cid-mmc7otgs": true })} </div> </div> `;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/components/Welcome.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SealCode - Creaci\xF3n de sitios web" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ` })}`;
}, "C:/Users/Andres/Documents/Desarrollo/sealy/src/pages/index.astro", void 0);

const $$file = "C:/Users/Andres/Documents/Desarrollo/sealy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
