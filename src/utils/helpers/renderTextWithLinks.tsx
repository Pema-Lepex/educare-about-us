import { DCDDSignUpLinkDetails } from "./URLs";

// Map the text to the link
const linkMap: Record<string, string> = {
  "DCDD Sign In": DCDDSignUpLinkDetails.linkTo,
  "Sign In": DCDDSignUpLinkDetails.linkTo,
};

export const renderTextWithLinks = (text: string | undefined) => {
  if (!text) return null;

  // Regex to catch: 1. Bold blocks, 2. Ordinals, 3. URLs/Emails
  const urlRegex = /(\*\*[^*]+\*\*|\d+(?:st|nd|rd|th)|support@[^\s]+|https?:\/\/[^\s]+)/gi;
  
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    // --- 1. HANDLE BOLD TEXT (potentially containing 21st) ---
    if (part.startsWith("**") && part.endsWith("**")) {
      const cleanText = part.replace(/\*\*/g, "");
      const link = linkMap[cleanText];

      // Inner logic to find "21st" inside the bolded text
      const processInnerContent = (content: string) => {
        const ordinalRegex = /(\d+)(st|nd|rd|th)/gi;
        const subParts = content.split(ordinalRegex);
        
        if (subParts.length === 1) return content; // No ordinals found

        return subParts.map((sub, j) => {
          if (/^(st|nd|rd|th)$/i.test(sub)) {
            return <sup key={j} className="text-[0.7em] leading-none">{sub}</sup>;
          }
          return sub;
        });
      };

      if (link) {
        return (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-extrabold">
            {processInnerContent(cleanText)}
          </a>
        );
      }
      return <strong key={i} className="font-extrabold">{processInnerContent(cleanText)}</strong>;
    }

    // --- 2. HANDLE STANDALONE SUPERSCRIPT (e.g., 21st outside bold) ---
    if (/^\d+(st|nd|rd|th)$/i.test(part)) {
      const num = part.match(/\d+/)?.[0];
      const suffix = part.match(/[a-z]+/i)?.[0];
      return <span key={i}>{num}<sup className="text-[0.7em]">{suffix}</sup></span>;
    }

    // --- 3. HANDLE LINKS & EMAILS ---
    if (/^https?:\/\//i.test(part)) {
      return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{part}</a>;
    }

    return part;
  });
};
export const renderFormattedText = (
  text: string | string[] | undefined,
  accentColor: string
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
      const href = isEmail
        ? `mailto:${part}`
        : part.startsWith("http")
        ? part
        : `https://${part}`;

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
