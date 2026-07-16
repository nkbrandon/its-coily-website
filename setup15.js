const fs = require("fs");
const path = require("path");

const articlesPath = path.join(__dirname, "lib/articles.ts");
let content = fs.readFileSync(articlesPath, "utf8");
let warnings = [];

// 1. Add subcategory field to the Article type
const typeMarker = 'category: "hair-care" | "beauty" | "hot-topics";';
if (content.includes(typeMarker)) {
  content = content.replace(
    typeMarker,
    'category: "hair-care" | "beauty" | "hot-topics";\n  subcategory?: "hair-education" | "hair-concerns" | "hairstyles" | "tutorials" | "products-reviews";',
  );
} else {
  warnings.push("Article type marker niet gevonden");
}

// 2. Tag existing hair-care articles with subcategories
const subcatMap = {
  "how-to-stretch-4c-hair-without-heat": "hair-education",
  "is-coily-hair-considered-curly": "hair-education",
  "how-to-diffuse-natural-hair-tips-for-perfectly-defined-coils":
    "hair-education",
  "5-best-steps-to-build-an-effective-hair-care-routine": "hair-education",
  "how-to-tame-frizz-on-natural-hair": "hair-education",
  "best-butters-for-natural-hair-nourish-and-protect-your-strands":
    "hair-education",
  "winter-hair-care-for-type-4-natural-hair-5-essential-tips": "hair-education",
  "the-pros-and-cons-of-texturizing-natural-hair-what-you-need-to-know":
    "hair-education",
  "how-to-build-an-effective-natural-hair-care-routine": "hair-education",
  "how-to-stretch-natural-hair-after-washing-a-comprehensive-guide":
    "hair-education",
  "which-method-is-better-lco-or-loc": "hair-education",
  "the-ultimate-guide-for-low-porosity-natural-hair": "hair-education",
  "high-porosity-natural-hair-the-ultimate-guide": "hair-education",
  "how-often-should-i-trim-natural-hair": "hair-concerns",
  "the-ultimate-guide-to-conditioners-for-natural-hair": "hair-education",
  "how-to-do-a-hot-oil-treatment-on-natural-hair": "tutorials",
  "7-tips-for-natural-hair-care-during-summer": "hair-education",
  "the-guide-to-choosing-the-right-shampoo-for-coily-hair": "hair-education",
  "how-to-take-care-of-fine-natural-hair": "hair-education",
  "how-to-wash-natural-hair-in-5-easy-steps": "tutorials",
  "what-is-hair-elasticity-everything-you-need-to-know": "hair-education",
  "what-is-hair-thickness-its-not-what-you-think": "hair-education",
  "what-is-hair-porosity-why-it-matters": "hair-education",
  "trimming-natural-hair-for-growth-find-out-all-you-need-to-know-about-trimming-natural-hair":
    "hair-concerns",
  "5-tips-for-natural-hair-growth-on-coily-hair": "hair-concerns",
  "what-are-protective-hairstyles": "hairstyles",
  "what-is-coily-hair": "hair-education",
  "top-3-essential-natural-hair-tips-for-beginners": "hair-education",
  "how-to-detangle-matted-hair-a-step-by-step-guide": "hair-concerns",
};

let patchedCount = 0;
for (const [slug, subcat] of Object.entries(subcatMap)) {
  const re = new RegExp(
    '(slug: "' +
      slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
      '",[\\s\\S]*?category: "hair-care",)',
  );
  if (re.test(content)) {
    content = content.replace(re, '$1\n    subcategory: "' + subcat + '",');
    patchedCount++;
  } else {
    warnings.push("slug niet gevonden: " + slug);
  }
}

// 3. Add the 3 new Trending Posts articles
const trendingArticles = [
  {
    slug: "what-type-of-are-natural-you",
    title: "What Type of Natural Are You?",
    date: "November 13, 2021",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2021/08/Twists-in-type-4-hair.jpg?fit=676%2C507&ssl=1",
    excerpt:
      "What type of natural are you? Find out based on your wash day habits, styling choices, and how much time you spend on your hair.",
    category: "hair-care",
    subcategory: "hair-education",
    content:
      "What type of natural are you? Your relationship with your hair says a lot about your natural hair journey. Are you the type who does an elaborate wash day every week, or do you prefer wash-and-go simplicity? Here are the questions that help reveal your natural hair type, based on your everyday habits.\n\n## Wash Day Habits\n\nHow often do you wash your hair? A few times a week, once a week, or as little as possible? And when it comes to refreshing your hair between washes, do you need it to look like first-day hair every single day, do you refresh as soon as you feel your hair needs it, or do you follow a don't fix it if it isn't broken approach?\n\n## Styling Preferences\n\nHow do you like to wear your hair? Some naturals wear their hair in its natural state all day, every day. Others love to mix things up with all kinds of hairstyles. And some prefer protective styles 24/7 to minimize manipulation.\n\n## Maintenance Routine\n\nHow often do you trim your hair, every 3-6 months, every year, or whenever you feel your hair needs it? And how much time do you spend on your hair overall, doing your hair all day every day, the necessary amount of time, or as little as possible?\n\n## Product Habits\n\nHow often do you buy new hair products? Are you constantly restocking and basically running your own shop, do you wait until your products are finished, or do you buy here and there without much thought?\n\n## Heat Usage\n\nHow often do you use heat on your hair? Never, once in a while, or is heat all you know?\n\n## Sectioning and Detangling\n\nHow many sections do you use on wash day, four or more to make sure everything is taken care of, two to four sections, or zero to one because you basically don't section your hair? And when you find a knot in your hair, what do you do, reach for scissors, do nothing, or gently pull it off with your hands?\n\n## Learning About Natural Hair\n\nHow many hair-related videos could you watch? Some naturals could binge watch all day, others stick to two or three videos max, while some watch none at all. Have you ever considered picking up a book about natural hair? Would you absolutely do it since you can never learn enough, would you consider it, or does the idea not appeal to you at all?\n\n## How Has Your Knowledge Grown?\n\nFinally, think about how your knowledge of natural hair has changed throughout your journey. Have you become an expert on all things natural hair, have you learned a lot in certain areas, or has nothing major changed?\n\nHowever you answered these questions, there's no wrong way to be natural. Whether you're a low-maintenance wash-and-go type, a dedicated hair care routine enthusiast, or somewhere in between, understanding your own habits helps you build a routine that actually works for your lifestyle.",
  },
  {
    slug: "are-there-cancer-causing-ingredients-in-our-braiding-hair",
    title: "Are There Cancer-Causing Ingredients In Our Braiding Hair?",
    date: "March 19, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/24344939.jpg?fit=2000%2C1355&ssl=1",
    excerpt:
      "A closer look at the Consumer Reports study on chemicals found in synthetic braiding hair, and what it means for Black women.",
    category: "hot-topics",
    content:
      "Synthetic braiding hair has been a staple in protective hairstyles for Black women. Not only can it be worn for longer periods of time, it also gives natural hair a break from day-to-day styling. Synthetic braiding hair has also been a way to switch up hairstyles and color and to experiment. Unfortunately, over the past couple of years there have been articles and videos linked to the chemicals used in the production of synthetic hair. Most recently, there has been a lot of talk regarding a Consumer Reports study highlighting cancer-causing chemicals found in braiding hair, but how accurate is this study?\n\n## Dangers of Synthetic Braiding Hair\n\nConsumer Reports (CR) tested two samples of each of 10 popular synthetic hair brands widely marketed to Black women for braids, extensions, and other hairstyles. The test, which focused on the presence of heavy metals and volatile organic compounds (VOCs), found cancer-causing (carcinogenic) ingredients in all 10 synthetic hair products. Three of the products further contained benzene, nine had unsafe levels of lead, and volatile organic compounds like acetone were found in all of them.\n\nThese chemicals act like endocrine disruptors that can interfere with the body's normal hormonal system. When you wear synthetic braids, they sit on your scalp and can be dermally absorbed or inhaled. If the hair is dipped in hot water during installation, a standard practice, it releases VOCs that can irritate the eyes, throat, and lungs. Once inside the body, these chemicals can contribute to hormone disruption, reproductive harm, respiratory problems, and increased cancer risk.\n\n## How Is Synthetic Hair Made?\n\nMost synthetic hair found in stores is made from modacrylic fiber, a mixture of polypropylene and resin. The most popular fiber is Kanekalon, produced by the Kaneka brand, though Kaneka states it only manufactures the fibers, not the finished products. Braiding hair companies are responsible for dyeing and styling the fibers.\n\nAccording to the Consumer Reports study, braiding hair companies use several carcinogenic ingredients in production:\n\n- Some synthetic braiding hair products contain benzene, which is known to cause acute myeloid leukemia.\n- Synthetic hair can contain methylene chloride, which may lead to liver and lung cancer after chronic exposure.\n- Most synthetic hair products contain lead, which can cause developmental disabilities and brain damage in children, along with cardiovascular, kidney, and reproductive issues in adults.\n- Most synthetic hair products contain high levels of acetone, a respiratory irritant.\n\nBraiding companies have since responded to the claims and reassured customers of the quality of their products, but the presence of chemical contamination remains a concern for consumers.\n\n## What Are the Safe Alternatives to Synthetic Hair?\n\nThe Black hair industry is booming, with the U.S. market for wigs and extensions alone expected to reach $6.34 billion by 2029. Unfortunately, regulations around the safety of synthetic braiding hair remain scarce globally. Here's how to minimize potential risk:\n\n- Human Hair Alternatives: Pricier, but human hair extensions eliminate the risk of synthetic chemical exposure.\n- Plastic-Free Braid Hair: Some brands now offer plastic-free hair made from natural materials like organic cotton, hemp, and plant fiber.\n- Rinse Before Installing: If you must use synthetic hair, soak it in a vinegar and water mix beforehand to help remove some chemical residue.\n- Pay Attention to Your Body: If you experience headaches, irritation, or respiratory issues after braiding, take the style down.\n- Support Transparency: Advocate for better industry regulations and push brands to disclose ingredients.\n\n## Should We Stop Wearing Braiding Hair?\n\nNot necessarily. Despite the controversy sparked by the Consumer Reports study, several chemists have questioned its methodology, and multiple beauty science creators have weighed in with their own analysis. This highlights the importance of nuance and doing your own research before drawing conclusions.\n\n## Key Takeaway\n\nDespite being widely used because of their beauty and ease of maintenance, synthetic hair braids contain certain chemicals that may lead to health issues. As more information continues to emerge, alternatives such as human hair extensions, plastic-free braid hair, or going natural are worth considering, especially since scalp irritation from synthetic hair is a common and unpleasant experience.",
  },
  {
    slug: "4-best-ways-to-moisturize-dry-natural-type-4-hair",
    title: "4 Best Ways to Moisturize Dry Natural Type 4 Hair",
    date: "August 12, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/08/20922.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "Dry natural hair appears dull, frizzy, and brittle. Here are the 4 best ways to bring lasting moisture back to type 4 hair.",
    category: "hair-care",
    subcategory: "hair-concerns",
    content:
      "Dry natural hair appears dull, frizzy, and brittle. In some cases, the scalp may be dry and flaky.\n\nVarious factors cause dry hair. Some are due to improper hair care practices, others are due to systemic conditions and climate. These factors include excessive use of heat on the hair, overexposure to dry, cold, or hot weather, use of harsh chemicals or products with harsh ingredients, and systemic conditions such as hypothyroidism and nutritional deficiencies.\n\n## How to Moisturize Dry Natural Hair\n\nHere are the 4 best ways to moisturize type 4 natural hair and prevent moisture loss.\n\n1. Use of deep conditioner\n2. Hot oil treatments\n3. Use moisturizing hair products\n4. Trim split ends\n\n### Use of Deep Conditioner\n\nDry hair needs deep conditioner because its molecules can penetrate the hair strand into the cortex to impart moisture and strength. Dry hair benefits from both moisturizing conditioners and strengthening or protein conditioners. Deep conditioning once a week or every two weeks, alternating between the two types, is a good practice. It's also important not to wash the hair too often, as this strips away the hair's natural oils.\n\n- Ensure the hair is open, not braided or weaved.\n- Detangle the hair using a wide-tooth comb.\n- Shampoo the hair using a high-quality moisturizing shampoo with warm water.\n- Rinse the shampoo and blot off excess water.\n- Apply a generous amount of deep conditioner from root to tip, parting the hair into small sections so the conditioner reaches every strand.\n- Leave the deep conditioner on the hair for 15-30 minutes, covered with a plastic cap, or use a hooded dryer.\n- Rinse off with lukewarm water, avoiding both cold water and scalding water.\n- Dry the hair with a microfiber or soft towel and style as desired.\n\n### Hot Oil Treatments\n\nHot oils help deliver moisture to dry hair. The heat opens the hair cuticles and allows the oils to penetrate the cortex, leaving the hair moisturized and vibrant.\n\n- Warm the oil in a bowl, don't boil it. Some of the best oils to use are olive oil, coconut oil, castor oil, and almond oil.\n- Apply the oil to the hair in small sections, from roots to tips, ensuring every strand is soaked.\n- Cover the hair with a plastic cap for 30 minutes, or leave it on overnight.\n- Shampoo and deep condition the hair afterward.\n- Use hot oil treatments at least once every two weeks.\n\n### Use Moisturizing Hair Products\n\nWater is the best source of moisture for hair. The most effective moisturizing products are water-based, containing emollients that help keep hair hydrated, such as jojoba oil, coconut oil, shea butter, and argan oil. Effective products also contain humectants like glycerin and hyaluronic acid, which help retain moisture. Type 4 hair generally requires moisturizing at least every 3 to 7 days, and works best when applied to clean hair with minimal product buildup.\n\n### Trim Split Ends\n\nSplit ends result from weathering caused by styling practices and daily hair care routines. Once the cuticle is damaged, the cortex is exposed and the hair shaft loses moisture to the environment. Trim split ends roughly every three months to prevent dryness from spreading.\n\n## Protect the Hair From Loss of Moisture\n\nAfter moisturizing your hair, it's important to keep that moisture locked in:\n\n- Sleep in silk or satin bonnets or pillowcases, since these don't absorb moisture from your hair the way cotton does.\n- Cover your hair from excessive sun exposure, since hot air pulls moisture from the hair.\n- Use moderate heat styling, as excessive heat damages the hair cuticle and increases porosity, leading to moisture loss.\n- Use synthetic extensions in moderation and keep moisturizing your hair even while wearing them.\n- Protect your hair from chlorinated water by wetting it with clean water and applying a leave-in or deep conditioner beforehand.\n\n## What Not to Do on Dry Natural Hair\n\n- Avoid washing with scalding water, it damages the hair cuticles and exposes the inner layers to moisture loss.\n- Avoid harsh products or ingredients like poor-quality sulfates, alcohol, and harsh detergents, which strip natural oils.\n- Avoid washing more than twice a week, as this strips away the hair's natural sebum.\n- Avoid sleeping on cotton pillowcases or under cotton head coverings, since cotton absorbs moisture from the hair.\n- Avoid excessive heat, which damages the cuticle and exposes the cortex to moisture loss.\n\nType 4 hair is prone to dryness due to its curly nature, since the coils cause sebum to travel slowly from root to tip. Using these remedies consistently will go a long way toward keeping type 4 hair adequately moisturized.",
  },
];

const newArticlesStr =
  trendingArticles
    .map((a) => {
      const fields = [
        "    slug: " + JSON.stringify(a.slug) + ",",
        "    title: " + JSON.stringify(a.title) + ",",
        "    date: " + JSON.stringify(a.date) + ",",
        "    image: " + JSON.stringify(a.image) + ",",
        "    excerpt: " + JSON.stringify(a.excerpt) + ",",
        "    category: " + JSON.stringify(a.category) + ",",
      ];
      if (a.subcategory) {
        fields.push("    subcategory: " + JSON.stringify(a.subcategory) + ",");
      }
      fields.push("    content: " + JSON.stringify(a.content) + ",");
      return "  {\n" + fields.join("\n") + "\n  },";
    })
    .join("\n") + "\n";

const articleMarker = "\n];\n\nexport function getArticleBySlug";
if (content.includes(articleMarker)) {
  content = content.replace(
    articleMarker,
    "\n" + newArticlesStr + "];\n\nexport function getArticleBySlug",
  );
} else {
  warnings.push("article marker niet gevonden, trending posts niet toegevoegd");
}

// 4. Add helper functions
const helperMarker =
  'export function getArticlesByCategory(category: Article["category"]) {\n  return articles.filter((article) => article.category === category);\n}\n';
if (content.includes(helperMarker)) {
  const newHelpers =
    helperMarker +
    '\nexport function getArticlesBySubcategory(subcategory: Article["subcategory"]) {\n  return articles.filter((article) => article.subcategory === subcategory);\n}\n\nexport function getRelatedArticles(slug: string, limit: number = 3) {\n  const current = getArticleBySlug(slug);\n  if (!current) return [];\n  return articles\n    .filter((article) => article.slug !== slug && article.category === current.category)\n    .slice(0, limit);\n}\n';
  content = content.replace(helperMarker, newHelpers);
} else {
  warnings.push("helper marker niet gevonden");
}

fs.writeFileSync(articlesPath, content);
console.log(
  "lib/articles.ts gepatcht. Nieuwe artikelen toegevoegd:",
  patchedCount,
  "/",
  Object.keys(subcatMap).length,
  "subcategorieen gezet.",
);
if (warnings.length) {
  console.log("WAARSCHUWINGEN:", warnings);
}

// 5. Patch lib/translations.ts with 2 new keys
const translationsPath = path.join(__dirname, "lib/translations.ts");
let tcontent = fs.readFileSync(translationsPath, "utf8");

if (tcontent.includes('newsletterPlaceholder: "Your email address",')) {
  tcontent = tcontent.replace(
    'newsletterPlaceholder: "Your email address",',
    'newsletterFirstNamePlaceholder: "Your first name",\n    newsletterPlaceholder: "Your email address",',
  );
} else {
  console.log("WAARSCHUWING: EN newsletterPlaceholder niet gevonden");
}

if (tcontent.includes('newsletterPlaceholder: "Jouw e-mailadres",')) {
  tcontent = tcontent.replace(
    'newsletterPlaceholder: "Jouw e-mailadres",',
    'newsletterFirstNamePlaceholder: "Jouw voornaam",\n    newsletterPlaceholder: "Jouw e-mailadres",',
  );
} else {
  console.log("WAARSCHUWING: NL newsletterPlaceholder niet gevonden");
}

if (
  tcontent.includes(
    'hotTopicsHubSubtitle: "The latest culture and community conversations.",',
  )
) {
  tcontent = tcontent.replace(
    'hotTopicsHubSubtitle: "The latest culture and community conversations.",',
    'hotTopicsHubSubtitle: "The latest culture and community conversations.",\n    trendingPostsTitle: "Trending Posts",',
  );
} else {
  console.log("WAARSCHUWING: EN hotTopicsHubSubtitle niet gevonden");
}

if (
  tcontent.includes(
    'hotTopicsHubSubtitle: "De laatste gesprekken over cultuur en community.",',
  )
) {
  tcontent = tcontent.replace(
    'hotTopicsHubSubtitle: "De laatste gesprekken over cultuur en community.",',
    'hotTopicsHubSubtitle: "De laatste gesprekken over cultuur en community.",\n    trendingPostsTitle: "Populaire artikelen",',
  );
} else {
  console.log("WAARSCHUWING: NL hotTopicsHubSubtitle niet gevonden");
}

fs.writeFileSync(translationsPath, tcontent);
console.log("lib/translations.ts gepatcht.");
console.log(
  "Klaar met setup15.js! Lees hierna de instructies voor de losse bestanden (Footer, Navbar, enz.) die ik apart geef.",
);
