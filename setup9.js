const fs = require("fs");
const path = require("path");

const files = {
  "lib/translations.ts": `export const translations = {
  en: {
    navHairCare: "Hair care",
    navBeauty: "Beauty",
    navHotTopics: "Hot topics",
    navAbout: "About",
    heroTitle: "Typ 4 hair at the centre.",
    heroSubtitle:
      "Learn everything about your coily hair, in an easy and understandable way, so you can confidently embrace and care for it.",
    heroCta: "Read more",
    hairCareTitle: "Hair care",
    beautyTitle: "Beauty",
    newsletterTitle: "Sign up for our newsletter",
    newsletterSubtitle: "Discover the latest trends and hair care tips.",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Subscribe",
    hairCareHubTitle: "Hair Care",
    hairCareHubSubtitle: "Discover everything you need for your coils.",
    beautyHubTitle: "Beauty",
    beautyHubSubtitle: "Beauty tips and news for every hair type.",
    hotTopicsHubTitle: "Hot Topics",
    hotTopicsHubSubtitle: "The latest culture and community conversations.",
    aboutHeading: "About It's Coily",
    aboutIntro1:
      "Itscoily is a blog centred around natural type 4 hair. The platform was founded in 2021 with the aim to help you take better care of your beautiful coils.",
    aboutIntro2:
      "Do you have type 4 hair? Then you've come to the right place. Learn everything about your coils, in an easy and understandable way. So you can confidently embrace and care for your hair.",
    aboutQuote: '"Your hair deserves recognition"',
    missionTitle: "Mission",
    missionText:
      "Our mission at It's Coily is to give you the tools you need to care for your type 4 hair with confidence. We understand that sometimes it can be overwhelming to know where to start, or that there isn't enough information available. We also want to break down the negative stigma surrounding the care of tighter hair textures and increase the representation of type 4 hair.",
    visionTitle: "Vision",
    visionText:
      "Our vision is to create a community where, regardless of your hair type, you have the knowledge and confidence to take care of your natural hair and embrace it as it is.",
    founderTitle: "Aurane | Founder of It's Coily",
    founderText:
      "Hi there! I'm Aurane, a passionate natural hair enthusiast who has embraced the beauty of natural hair since 2014. My journey has been filled with learning and discovery, and I could talk about natural hair all day long. As I began wearing my natural hair out more often, I noticed an increasing number of questions from friends and family. Realizing they probably weren't the only ones curious about natural hair care, I decided to start It's Coily.",
  },
  nl: {
    navHairCare: "Haarverzorging",
    navBeauty: "Beauty",
    navHotTopics: "Hot topics",
    navAbout: "Over ons",
    heroTitle: "Type 4 haar centraal.",
    heroSubtitle:
      "Leer alles over jouw krullend haar, op een makkelijke en begrijpelijke manier, zodat je het met vertrouwen kan omarmen en verzorgen.",
    heroCta: "Lees meer",
    hairCareTitle: "Haarverzorging",
    beautyTitle: "Beauty",
    newsletterTitle: "Schrijf je in voor onze nieuwsbrief",
    newsletterSubtitle: "Ontdek de laatste trends en haarverzorgingstips.",
    newsletterPlaceholder: "Jouw e-mailadres",
    newsletterButton: "Inschrijven",
    hairCareHubTitle: "Haarverzorging",
    hairCareHubSubtitle: "Ontdek alles wat je nodig hebt voor jouw krullen.",
    beautyHubTitle: "Beauty",
    beautyHubSubtitle: "Beautytips en nieuws voor elk haartype.",
    hotTopicsHubTitle: "Hot topics",
    hotTopicsHubSubtitle: "De laatste gesprekken over cultuur en community.",
    aboutHeading: "Over It's Coily",
    aboutIntro1:
      "Itscoily is een blog rond natuurlijk type 4 haar. Het platform werd in 2021 opgericht om je te helpen beter voor jouw prachtige krullen te zorgen.",
    aboutIntro2:
      "Heb jij type 4 haar? Dan ben je hier aan het juiste adres. Leer alles over jouw krullen, op een makkelijke en begrijpelijke manier. Zodat je jouw haar met vertrouwen kan omarmen en verzorgen.",
    aboutQuote: '"Jouw haar verdient erkenning"',
    missionTitle: "Missie",
    missionText:
      "Onze missie bij It's Coily is om jou de tools te geven die je nodig hebt om met vertrouwen voor jouw type 4 haar te zorgen. We begrijpen dat het soms overweldigend kan zijn om te weten waar te beginnen, of dat er niet genoeg informatie beschikbaar is. Daarnaast willen we ook het negatieve stigma rond de verzorging van strakkere haartexturen doorbreken en de representatie van type 4 haar vergroten.",
    visionTitle: "Visie",
    visionText:
      "Onze visie is om een community te creëren waar je, ongeacht jouw haartype, de kennis en het vertrouwen hebt om voor jouw natuurlijke haar te zorgen en het te omarmen zoals het is.",
    founderTitle: "Aurane | Oprichter van It's Coily",
    founderText:
      "Hoi! Ik ben Aurane, een gepassioneerde natural hair enthousiast die sinds 2014 de schoonheid van natuurlijk haar omarmt. Mijn reis stond vol leren en ontdekken, en ik kan de hele dag praten over natuurlijk haar. Naarmate ik mijn natuurlijke haar vaker los begon te dragen, merkte ik steeds meer vragen op van vrienden en familie. Ik besefte dat zij waarschijnlijk niet de enigen waren die nieuwsgierig waren naar haarverzorging, en besloot om It's Coily te starten.",
  },
} as const;
`,
  "components/Navbar.tsx": `"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-900">
          Aurane
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/hair-care" className="hover:text-indigo-700">
            {t("navHairCare")}
          </Link>
          <Link href="/beauty" className="hover:text-indigo-700">
            {t("navBeauty")}
          </Link>
          <Link href="/hot-topics" className="hover:text-indigo-700">
            {t("navHotTopics")}
          </Link>
          <Link href="/about" className="hover:text-indigo-700">
            {t("navAbout")}
          </Link>
        </nav>
        <button
          onClick={() => setLanguage(language === "en" ? "nl" : "en")}
          className="px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50"
        >
          {language === "en" ? "NL" : "EN"}
        </button>
      </div>
    </header>
  );
}
`,
  "app/hair-care/page.tsx": `"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCard from "@/components/PostCard";
import { getArticlesByCategory } from "@/lib/articles";
import { useLanguage } from "@/context/LanguageContext";

export default function HairCarePage() {
  const { t } = useLanguage();
  const articles = getArticlesByCategory("hair-care");

  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-2">
          {t("hairCareHubTitle")}
        </h1>
        <p className="text-gray-600 mb-10">{t("hairCareHubSubtitle")}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
`,
  "app/beauty/page.tsx": `"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCard from "@/components/PostCard";
import { getArticlesByCategory } from "@/lib/articles";
import { useLanguage } from "@/context/LanguageContext";

export default function BeautyPage() {
  const { t } = useLanguage();
  const articles = getArticlesByCategory("beauty");

  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-2">
          {t("beautyHubTitle")}
        </h1>
        <p className="text-gray-600 mb-10">{t("beautyHubSubtitle")}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
`,
  "app/hot-topics/page.tsx": `"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCard from "@/components/PostCard";
import { getArticlesByCategory } from "@/lib/articles";
import { useLanguage } from "@/context/LanguageContext";

export default function HotTopicsPage() {
  const { t } = useLanguage();
  const articles = getArticlesByCategory("hot-topics");

  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-2">
          {t("hotTopicsHubTitle")}
        </h1>
        <p className="text-gray-600 mb-10">{t("hotTopicsHubSubtitle")}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
`,
  "app/about/page.tsx": `"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6">
          {t("aboutHeading")}
        </h1>
        <img
          src="https://i0.wp.com/itscoily.com/wp-content/uploads/2024/05/pexels-rdne-6192164.jpg?fit=1024%2C683&ssl=1"
          alt={t("aboutHeading")}
          className="rounded-xl w-full object-cover mb-8"
        />
        <p className="text-gray-700 mb-4 leading-relaxed">{t("aboutIntro1")}</p>
        <p className="text-gray-700 mb-10 leading-relaxed">{t("aboutIntro2")}</p>
        <p className="text-xl italic text-indigo-900 text-center mb-10">
          {t("aboutQuote")}
        </p>

        <h2 className="text-2xl font-bold text-indigo-950 mb-3">{t("missionTitle")}</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">{t("missionText")}</p>

        <h2 className="text-2xl font-bold text-indigo-950 mb-3">{t("visionTitle")}</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">{t("visionText")}</p>

        <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
          <img
            src="https://i0.wp.com/itscoily.com/wp-content/uploads/2022/03/IMG_8613.jpg?fit=1024%2C1024&ssl=1"
            alt="Aurane"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-indigo-950 mb-2">
              {t("founderTitle")}
            </h2>
            <p className="text-gray-700 leading-relaxed">{t("founderText")}</p>
          </div>
        </div>
      </section>
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
  console.log("Aangemaakt/overschreven:", filePath);
}

console.log(
  "Klaar! Hair Care, Beauty, Hot Topics en About pagina's staan live, en de Navbar-links werken nu echt.",
);
console.log("Je kan setup9.js nu verwijderen.");
