import Link from "next/link";

type PostCardProps = {
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
  date?: string;
};

export default function PostCard({
  title,
  excerpt,
  image,
  slug,
  date,
}: PostCardProps) {
  const content = (
    <div className="flex flex-col">
      {image ? (
        <img
          src={image}
          alt={title}
          className="rounded-lg aspect-[4/3] mb-3 w-full object-cover"
        />
      ) : (
        <div className="bg-gray-200 rounded-lg aspect-[4/3] mb-3" />
      )}
      {date && (
        <p className="text-xs text-gray-500 mb-1">It&apos;s Coily · {date}</p>
      )}
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {excerpt && <p className="text-sm text-gray-600 mt-1">{excerpt}</p>}
    </div>
  );

  if (slug) {
    return (
      <Link
        href={"/blog/" + slug}
        className="hover:opacity-90 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return content;
}
