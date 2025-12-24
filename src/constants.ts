// ======================
// Site Configuration
// ======================
// Edit these values to customize your site

export const SITE_NAME = "SealCode";
export const SITE_TITLE = "SealCode - Creación de sitios web";
export const SITE_DESCRIPTION =
    "Diseñamos páginas web claras, rápidas y enfocadas en generar clientes, sin complicaciones técnicas ni lenguaje raro.";
export const SITE_URL = "https://sealcode.com.mx"; // Your site's base URL (no trailing slash)
export const SITE_LANGUAGE = "es";

// ======================
// Analytics
// ======================
export const GA_MEASUREMENT_ID = "G-NK4HXVRRXG"; // Replace with your Google Analytics Measurement ID

// ======================
// SEO & Meta Tags
// ======================
export const META_TITLE_TEMPLATE = "%s | SealCode mx"; // %s will be replaced with page title
export const META_DESCRIPTION = SITE_DESCRIPTION; // Default meta description
export const META_AUTHOR = "Andrés Torres";
export const META_KEYWORDS = [
    "emprendimiento",
    "web",
    "mexico",
    "vender",
    "blog",
];

// ======================
// Open Graph / Social
// ======================
export const OG_TYPE = "website"; // Default OG type for pages
export const OG_IMAGE = "/og-image.png"; // Default OG image (relative to public folder)
export const OG_IMAGE_ALT = "SealCode - Creación de sitios web";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

// ======================
// Twitter Card
// ======================
export const TWITTER_CARD = "summary_large_image"; // 'summary' or 'summary_large_image'
export const TWITTER_SITE = "@sealcode"; // Your Twitter handle (optional)
export const TWITTER_CREATOR = "@sealcode"; // Content creator Twitter handle (optional)

// ======================
// Footer Configuration
// ======================
export const FOOTER_COPYRIGHT_NAME = "SealCode";
export const FOOTER_COPYRIGHT_TEXT = "Todos los derechos reservados.";

// Navigation Links
// export const FOOTER_NAV_LINKS = [
//     { label: "About", href: "/about" },
//     { label: "Blog", href: "#" },
//     { label: "Team", href: "#" },
//     { label: "Pricing", href: "#" },
//     { label: "Contact", href: "#" },
//     { label: "Terms", href: "#" },
// ];

// Social Media Links (set to empty string or remove property to hide)
// export const SOCIAL_LINKS = {
//     facebook: "#",
//     instagram: "#",
//     twitter: "#",
//     github: "#",
//     dribbble: "#",
// };

// ======================
// Type Definitions
// ======================
export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
    noindex?: boolean;
}