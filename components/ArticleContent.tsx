type ArticleContentProps = {
  content: string;
};

export default function ArticleContent({ content }: ArticleContentProps) {
  const blocks = content.trim().split(/\n\n+/);

  function renderInline(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  }

  return (
    <div className="max-w-none">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-lg font-bold text-indigo-950 mt-6 mb-2">
              {renderInline(trimmed.slice(4))}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold text-indigo-950 mt-8 mb-3">
              {renderInline(trimmed.slice(3))}
            </h2>
          );
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^- /, ""));
          return (
            <ul key={i} className="list-disc pl-6 my-3 space-y-1 text-gray-700">
              {items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-gray-700 my-3 leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
