import { useEffect } from "react";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    noindex?: boolean;
}

const DEFAULTS = {
    title: 'About Us | The Vision Behind Educare Skill',
    description:"Learn about Educare Skill's journey to modernize education in Bhutan. Our team is dedicated to providing high-quality Dzongkha tutorials and interactive digital learning.",
    image: 'https://www.educareskill.com/og-image.jpg',
    url: 'https://www.educareskill.com/aboutus'
};

type MetaKind = "name" | "property";

// Create or update a <meta> tag in <head>, keyed by name/property.
const setMeta = (kind: MetaKind, key: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${kind}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(kind, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

// Remove a <meta> tag if it exists (used for conditional tags).
const removeMeta = (kind: MetaKind, key: string) => {
    document.head.querySelector(`meta[${kind}="${key}"]`)?.remove();
};

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, type = 'website', noindex }) => {
    const fullTitle = title ? `${title} | Educare Skill` : DEFAULTS.title;
    const desc = description || DEFAULTS.description;
    const img = image || DEFAULTS.image;
    const canonical = url || DEFAULTS.url;

    useEffect(() => {
        document.title = fullTitle;

        setMeta("name", "description", desc);

        if (keywords) setMeta("name", "keywords", keywords);
        else removeMeta("name", "keywords");

        if (noindex) setMeta("name", "robots", "noindex, nofollow");
        else removeMeta("name", "robots");

        // Open Graph
        setMeta("property", "og:type", type);
        setMeta("property", "og:title", fullTitle);
        setMeta("property", "og:description", desc);
        setMeta("property", "og:image", img);
        setMeta("property", "og:url", canonical);
        setMeta("property", "og:site_name", "Educare Skill");

        // Twitter
        setMeta("name", "twitter:card", "summary_large_image");
        setMeta("name", "twitter:title", fullTitle);
        setMeta("name", "twitter:description", desc);
        setMeta("name", "twitter:image", img);

        // Canonical
        let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!link) {
            link = document.createElement("link");
            link.setAttribute("rel", "canonical");
            document.head.appendChild(link);
        }
        link.setAttribute("href", canonical);
    }, [fullTitle, desc, keywords, img, canonical, type, noindex]);

    return null;
};

export default SEO;
