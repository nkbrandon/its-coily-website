const fs = require("fs");
const path = require("path");

const files = {
  "components/Navbar.tsx": `export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-indigo-900">Aurane</span>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-indigo-700">Hair care</a>
          <a href="#" className="hover:text-indigo-700">Beauty</a>
          <a href="#" className="hover:text-indigo-700">Hot topics</a>
          <a href="#" className="hover:text-indigo-700">About</a>
        </nav>
      </div>
    </header>
  );
}
`,
  "components/Hero.tsx": `export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
          All You Need For Your Coils.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Aurane helpt je jouw natuurlijke haar te begrijpen, voor betere haarverzorging.
        </p>
        
          href="#hair-care"
          className="inline-block mt-6 px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800"
        >
          Lees meer
        </a>
      </div>
      <div className="bg-gray-200 rounded-xl aspect-[4/3]" />
    </section>
  );
}
`,
  "components/PostCard.tsx": `type PostCardProps = {
  title: string;
  excerpt?: string;
};

export default function PostCard({ title, excerpt }: PostCardProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 rounded-lg aspect-[4/3] mb-3" />
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {excerpt && <p className="text-sm text-gray-600 mt-1">{excerpt}</p>}
    </div>
  );
}
`,
  "components/Newsletter.tsx": `export default function Newsletter() {
  return (
    <section className="bg-indigo-950 text-white py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-2xl font-bold">Schrijf je in voor onze nieuwsbrief</h2>
        <p className="mt-2 text-indigo-200">Blijf op de hoogte van nieuwe tips voor jouw haar!</p>
        <form className="mt-6 flex gap-2">
          <input
            type="email"
            placeholder="Jouw e-mailadres"
            className="flex-1 px-4 py-3 rounded-md text-gray-900"
          />
          <button className="px-6 py-3 bg-white text-indigo-950 rounded-md font-medium">
            Versturen
          </button>
        </form>
      </div>
    </section>
  );
}
`,
  "components/Footer.tsx": `export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <p>Copyright {new Date().getFullYear()} | Aurane</p>
    </footer>
  );
}
`,
  "app/page.tsx": `import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="hair-care" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Hair Care</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PostCard title="Titel artikel 1" />
          <PostCard title="Titel artikel 2" />
          <PostCard title="Titel artikel 3" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Beauty</h2>
        <PostCard
          title="Titel artikel"
          excerpt="Korte samenvatting van het artikel komt hier..."
        />
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log("Aangemaakt:", filePath);
}

console.log("Klaar! Je kan dit bestand (setup.js) nu verwijderen.");
