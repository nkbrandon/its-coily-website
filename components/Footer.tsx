export default function Footer() {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/itscoily/" },
    { label: "Facebook", href: "https://www.facebook.com/itscoily" },
    { label: "X", href: "https://twitter.com/itscoily" },
    { label: "Youtube", href: "https://www.youtube.com/@itscoily" },
  ];

  return (
    <footer className="bg-indigo-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/privacy-policy"
          className="text-indigo-200 text-sm hover:text-white"
        >
          Privacy policy
        </a>
        <p className="text-indigo-300 text-xs">
          Copyright {new Date().getFullYear()} | It&apos;s Coily
        </p>
      </div>
    </footer>
  );
}
