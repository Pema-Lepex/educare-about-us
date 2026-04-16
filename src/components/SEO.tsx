import { Helmet } from 'react-helmet-async';

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
    title: 'Educare Skill | #1 Online Dzongkha Tutorials & Learning in Bhutan',
    description:
        "Educare Skill is Bhutan's leading online learning platform offering Dzongkha tutorials, engaging educational content such as games, nursery rhymes, animations, and read-aloud stories, along with a comprehensive learning management system for learners of all ages.",
    image: 'https://www.educareskill.com/og-image.jpg',
    url: 'https://www.educareskill.com'
};

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, type = 'website', noindex }) => {
    const fullTitle = title ? `${title} | Educare Skill` : DEFAULTS.title;
    const desc = description || DEFAULTS.description;
    const img = image || DEFAULTS.image;
    const canonical = url || DEFAULTS.url;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={desc} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={img} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content="Educare Skill" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={img} />

            {/* Canonical */}
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
};

export default SEO;
