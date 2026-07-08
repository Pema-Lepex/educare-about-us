import { DCDDSignUpLinkDetails } from "./URLs";

// Map the text to the link
const linkMap: Record<string, string> = {
  "DCDD Sign In": DCDDSignUpLinkDetails.linkTo,
  "Sign In": DCDDSignUpLinkDetails.linkTo,
};

export const renderTextWithLinks = (text: string | undefined) => {
  if (!text) return null;
  /**
   * Updated Regex to catch:
   * 1. Bold (**text**)
   * 2. Italic (*text* or _text_)
   * 3. Ordinals (21st)
   * 4. URLs/Emails
   */
  const urlRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_|\d+(?:st|nd|rd|th)|support@[^\s]+|https?:\/\/[^\s]+)/gi;

  const parts = text.split(urlRegex);

  // Reusable helper to handle superscripting inside bold/italic tags
  const processInnerContent = (content: string) => {
    const ordinalRegex = /(\d+)(st|nd|rd|th)/gi;
    const subParts = content.split(ordinalRegex);

    if (subParts.length === 1) return content;

    return subParts.map((sub, j) => {
      if (/^(st|nd|rd|th)$/i.test(sub)) {
        return <sup key={j} className="text-[0.7em] leading-none">{sub}</sup>;
      }
      return sub;
    });
  };

  return parts.map((part, i) => {
    if (!part) return null;

    // --- 1. HANDLE BOLD TEXT ---
    if (part.startsWith("**") && part.endsWith("**")) {
      const cleanText = part.replace(/\*\*/g, "");
      const link = linkMap[cleanText];

      if (link) {
        return (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
            {processInnerContent(cleanText)}
          </a>
        );
      }
      return <strong key={i} className="font-semibold">{processInnerContent(cleanText)}</strong>;
    }

    // --- 2. HANDLE ITALIC TEXT ---
    // Checks for *text* or _text_
    if ((part.startsWith("*") && part.endsWith("*")) || (part.startsWith("_") && part.endsWith("_"))) {
      const cleanText = part.slice(1, -1); // Removes the first and last character
      return <em key={i} className="italic">{processInnerContent(cleanText)}</em>;
    }

    // --- 3. HANDLE STANDALONE SUPERSCRIPT ---
    if (/^\d+(st|nd|rd|th)$/i.test(part)) {
      const num = part.match(/\d+/)?.[0];
      const suffix = part.match(/[a-z]+/i)?.[0];
      return <span key={i}>{num}<sup className="text-[0.7em]">{suffix}</sup></span>;
    }

    // --- 4. HANDLE LINKS & EMAILS ---
    if (/^https?:\/\//i.test(part) || /^support@/i.test(part)) {
      if (/^https?:\/\//i.test(part) || /^support@/i.test(part)) {
        const href = part.startsWith("support@")
          ? `mailto:${part}`
          : part; // ✅ Just use the full URL as-is

        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
            {part}
          </a>
        );
      }
    }
    return part;
  });
};

export const renderFormattedText = (
  text: string | string[] | undefined,
  accentColor: string,
  isApp = false
) => {
  if (!text) return null;

  const combinedRegex =
    /(https?:\/\/[^\s]+|www\.[^\s]+|support@[^\s]+|\*\*[^*]+\*\*)/g;
  const textStr = Array.isArray(text) ? text.join("\n") : text;
  const parts = textStr.split(combinedRegex);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-extrabold text-slate-900 ">
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }

    if (part.match(/(https?:\/\/[^\s]+|www\.[^\s]+|support@[^\s]+)/)) {
      const isEmail = part.includes("@");
      const isInternal = !isEmail && part.includes("educareskill.com");

      // In the app context internal (within-page) redirects are cut off:
      // render the internal link as plain text while external links remain.
      if (isApp && isInternal) {
        return part;
      }

      const href = isEmail
        ? `mailto:${part}`
        : isInternal ? (() => {
          const url = new URL(part);
          return `${url.pathname}${url.search}${url.hash}`; // /path?query#hash
        })()
          : part;

      return (
        <a
          key={i}
          href={href}
          target={isEmail ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="underline decoration-2 underline-offset-4 font-bold transition-opacity hover:opacity-70"
          style={{ color: accentColor }}
        >
          {part}
        </a>
      );
    }
    // Return plain text
    return part;
  });
};
