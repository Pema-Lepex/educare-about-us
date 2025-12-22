export const renderTextWithLinks = (text: string | undefined) => {
    if (!text) return null;

    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|support@[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        if (part.includes("@")) {
          return (
            <a key={i} href={`mailto:${part}`} className="text-primary-500 hover:underline font-medium">
              {part}
            </a>
          );
        }

        const href = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline font-medium"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };